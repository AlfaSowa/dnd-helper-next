'use client'

import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface FieldProps {
  label: string
  value: React.ReactNode
  className?: string
  align?: 'right' | 'left'
  link?: string
}

export const Field = ({
  label,
  value,
  className = '',
  align = 'right',
  link
}: FieldProps) => {
  return (
    <div
      className={twMerge(
        className,
        'flex flex-col',
        align === 'left' ? 'items-end' : ''
      )}
    >
      <div className="text-gray-500 text-sm">{label}</div>

      {link ? (
        <Link
          className="text-primary-600 hover:text-primary-600/80"
          href={link}
        >
          {value ?? '-'}
        </Link>
      ) : (
        <div className="font-medium">{value ?? '-'}</div>
      )}
    </div>
  )
}
