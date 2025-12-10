import { ReactNode } from 'react'

interface FormControlProps {
  children: ReactNode
}

export const FormControl = ({ children }: FormControlProps) => {
  return <div>{children}</div>
}
