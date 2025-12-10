'use client'

import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  title?: string
  RightContent?: ReactNode
}

export const Section = ({ children, title, RightContent }: SectionProps) => {
  return (
    <div className="flex flex-col gap-4 ">
      {(title || RightContent) && (
        <div className="flex items-center">
          {title && <h3>{title}</h3>}
          {RightContent && <div className="ml-auto">{RightContent}</div>}
        </div>
      )}

      {children}
    </div>
  )
}
