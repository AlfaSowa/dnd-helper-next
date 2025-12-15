'use client'

import { forwardRef, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          'bg-red-300 px-2 py-1 rounded hover:bg-red-400',
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
