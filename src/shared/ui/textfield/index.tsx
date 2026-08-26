'use client'

import { forwardRef, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement>

export const Textfield = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
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

Textfield.displayName = 'Textfield'
