'use client'

import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export enum THEME_VARIANT {
  primary = 'primary',
  secondary = 'secondary'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof THEME_VARIANT
  children?: ReactNode
  title?: string
  RightContent?: ReactNode
  LeftIcon?: ReactNode
  RightIcon?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, LeftIcon, RightIcon, ...props }, ref) => {
    return (
      <button
        className={twMerge(
          'flex items-center bg-red-300 text-red-100 p-1 rounded cursor-pointer hover:bg-red-400 hover:text-red-200',
          children && 'px-2 py-1',
          className
        )}
        ref={ref}
        {...props}
      >
        {LeftIcon}
        {children}
        {RightIcon}
      </button>
    )
  }
)

Button.displayName = 'Button'
