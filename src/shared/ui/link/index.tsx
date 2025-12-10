'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

export interface LinkToProps {
  children: ReactNode
  to: string
}

export const LinkTo = ({ children, to }: LinkToProps) => {
  return (
    <Link href={to}>
      <div className="text-sm text-gray-500 hover:text-gray-600">{children}</div>
    </Link>
  )
}
