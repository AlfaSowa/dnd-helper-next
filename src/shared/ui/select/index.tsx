'use client'

import { useRef, useState } from 'react'
import { Dropdown } from '../dropdown'
import { Input } from '../input'

type Option = {
  value: string
  name: string
}
export interface SelectProps {
  options: Option[]
  onChange: (v: Option) => void
  value: string | number
}

export const Select = ({ options, onChange, value }: SelectProps) => {
  const anchorElRef = useRef<HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleChange = (option: Option) => {
    console.log(option)

    onChange(option)
    setIsOpen(false)
  }

  return (
    <>
      <div ref={anchorElRef}>
        <Input
          className="w-full"
          onClick={handleClick}
          value={options.find((opt) => opt.value === value)?.name || ''}
          readOnly
        />
      </div>

      <Dropdown onClose={handleClose} isOpen={isOpen} anchorEl={anchorElRef}>
        {options.map((opt) => (
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
