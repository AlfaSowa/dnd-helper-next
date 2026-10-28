'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps {
  children?: ReactNode
  onClick?: () => void
  title?: string
  link?: string
}

export const Card = ({ children, onClick, title, link }: CardProps) => {
  return (
    <div
      onClick={() => {}}
      className={twMerge(
        'rounded',
        (onClick || link) && 'cursor-pointer bg-main hover:bg-secondary'
      )}
    >
      {link && (
        <Link href={link} className="group p-2 block">
          {title && (
            <div className="text-xs truncate group-hover:text-odd">{title}</div>
          )}
          <div className="group-hover:text-text-hover">{children}</div>
        </Link>
      )}

      {!link && (
        <div className="p-2 group">
          {title && (
            <div className="text-xs truncate group-hover:text-odd">{title}</div>
          )}
          <div className="group-hover:text-text-hover">{children}</div>
        </div>
      )}
    </div>
  )
}
