'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps {
  children: ReactNode
  onClick?: () => void
  title?: string
  link?: string
}

export const Card = ({ children, onClick, title, link }: CardProps) => {
  return (
    <div
      onClick={() => {}}
      className={twMerge('shadow shadow-gray-600 rounded', (onClick || link) && 'cursor-pointer hover:bg-gray-100/50')}
    >
      {link && (
        <Link href={link} className="p-2 block">
          {title && <div className="text-xs text-gray-500 truncate">{title}</div>}
          {children}
        </Link>
      )}

      {!link && (
        <div className="p-2">
          {title && <div className="text-xs text-gray-500 truncate">{title}</div>}
          {children}
        </div>
      )}
    </div>
  )
}
