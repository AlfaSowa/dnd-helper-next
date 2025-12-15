'use client'

import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  children: ReactNode
  container?: Element
}

export const Portal = ({ children, container }: PortalProps) => {
  return createPortal(children, container || document.body)
}
