'use client'

import { ReactNode } from 'react'
import { UseFormReturn } from '../hooks'

interface FormProps<T> {
  onSubmit?: (data: T) => Promise<void> | void
  children?: ReactNode
  form: UseFormReturn<T>
}

export function Form<T>({ children, onSubmit, form }: FormProps<T>) {
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
