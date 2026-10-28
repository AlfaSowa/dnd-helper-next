'use client'

import { AppRoutes } from '@/app/routes'
import Link from 'next/link'
import { useState } from 'react'
import { HeaderMenu } from './header-menu'

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="h-10 flex items-center gap-8 px-2 bg-main sticky top-0 sm:h-auto">
      <Link onClick={() => setOpen(false)} href={AppRoutes.root.path}>
        DND-HELPER
      </Link>

      <HeaderMenu open={open} setOpen={setOpen} />

      <div className="ml-auto">
        <Link href={AppRoutes.admin.path}>ADMIN</Link>
      </div>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="block sm:hidden text-text"
      >
        Меню
      </button>
    </header>
  )
}
