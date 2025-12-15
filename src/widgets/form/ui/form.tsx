'use client'

import { ReactNode } from 'react'
import { UseFormReturn } from '../hooks'

interface FormProps {
  onSubmit?: (data: object) => Promise<void> | void
  children?: ReactNode
  form: UseFormReturn
}

export function Form({ children, onSubmit, form }: FormProps) {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        await form.submit(async (data) => {
          if (onSubmit) await onSubmit(data)
        })
      }}
    >
      {children}
    </form>
  )
}
