'use client'

import { ReactNode, RefObject, useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { Portal } from '../portal'

export interface DropdownProps {
  children: ReactNode
  isOpen: boolean
  anchorEl: RefObject<HTMLElement>
  onClose: () => void
}

export const Dropdown = ({
  children,
  isOpen,
  anchorEl,
  onClose
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node) &&
      !anchorEl.current.contains(e.target as Node)
    ) {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const rect = anchorEl?.current && anchorEl?.current.getBoundingClientRect()

  return (
    <>
      {isOpen && (
        <Portal>
          <div
            style={{
              top: rect.bottom + window.scrollY,
              left: rect.left + window.scrollX
            }}
            className="pt-2 absolute"
          >
            <div
              className={twMerge('min-w-60 z-50 bg-amber-700 p-2 rounded')}
              ref={dropdownRef}
            >
              {children}
            </div>
          </div>
        </Portal>
      )}
    </>
  )
}
