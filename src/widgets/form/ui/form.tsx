'use client'

import { ReactNode } from 'react'

export const Form = ({ children, onSubmit }: { children?: ReactNode; onSubmit?: () => void }) => {
  return <form onSubmit={onSubmit}>{children}</form>
}
