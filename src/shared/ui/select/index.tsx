'use client'

import { OptionItem } from '@/widgets/form'
import { useMemo, useRef, useState } from 'react'
import { Dropdown } from '../dropdown'
import { Input } from '../input'

export interface SelectProps {
  options: OptionItem[]
  onChange: (v: string | number | string[]) => void
  value: string | number | string[]
  multy?: boolean
}

export const Select = ({ options, onChange, value, multy }: SelectProps) => {
  const anchorElRef = useRef<HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleChange = (option: OptionItem) => {
    if (!multy) {
      onChange(option.value)
      setIsOpen(false)
      return
    }

    if (multy) {
      const rawSeletedItems = selectedItems.includes(option.value)
        ? selectedItems.filter((value) => value !== option.value)
        : [...selectedItems, option.value]

      const rawOptions = options
        .filter((option) => rawSeletedItems.includes(option.value))
        .reduce((acc, cur) => {
          acc.push(cur.value)
          return acc
        }, [])

      onChange(rawOptions as string[])

      setSelectedItems(rawSeletedItems)
    }
  }

  const inputValue = useMemo(() => {
    if (multy) {
      return options
        .filter((option) => selectedItems.includes(option.value))
        .reduce((acc, cur) => {
          acc.push(cur.name)
          return acc
        }, [])
    }
    return options.find((option) => option.value === value)?.name ?? ''
  }, [multy, options, selectedItems, value])

  return (
    <>
      <div ref={anchorElRef}>
        <Input
          className="w-full"
          onClick={handleClick}
          value={inputValue}
          readOnly
          multiple
        />
      </div>

      <Dropdown onClose={handleClose} isOpen={isOpen} anchorEl={anchorElRef}>
        {options?.map((opt) => (
          <div
            className="cursor-pointer hover:bg-amber-500"
            onClick={() => handleChange(opt)}
            key={opt.value}
          >
            {opt.name}
          </div>
        ))}
      </Dropdown>
    </>
  )
}
