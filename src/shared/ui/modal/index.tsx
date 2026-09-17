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
    <div className="fixed inset-0 bg-amber-300 z-50">
      <div
        className="top-0 bottom-0 right-0 left-0 fixed bg-amber-950 -z-1"
        onClick={backDropHandler}
        ref={modalWrapperRef}
        aria-hidden
      />

      <div className="h-full flex justify-center items-center">
        <div className="flex-1 flex flex-col bg-bg max-w-4/5 m-8 max-h-[calc(100%-64px)] overflow-y-auto">
          <div className="p-4 bg-amber-600">
            <Button onClick={onClose}>Закрыть</Button>
          </div>

          <div className="overflow-y-auto p-4">{children}</div>
        </div>
      </div>
    </div>,
    document.body
  )
}
