'use client'

import { ReactNode, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '../button'

export interface ModalProps {
  children: ReactNode
  open: boolean
  onClose?: () => void
}

export const Modal = ({ children, open, onClose }: ModalProps) => {
  const modalWrapperRef = useRef<HTMLDivElement>(null)

  const backDropHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalWrapperRef?.current === e.target && onClose) {
      onClose()
    }
  }

  if (!open) {
    return null
  }

  return createPortal(
    <div className="fixed inset-0 bg-amber-300">
      <Button onClick={onClose}>Закрыть</Button>
      <div onClick={backDropHandler} ref={modalWrapperRef} />
      {children}
    </div>,
    document.body
  )
}
