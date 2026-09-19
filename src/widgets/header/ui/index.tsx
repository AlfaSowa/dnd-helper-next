'use client'

import { AppRoutes } from '@/app/routes'
import Link from 'next/link'
import { useState } from 'react'
import { HeaderMenu } from './header-menu'

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="flex items-center gap-8 px-2 bg-amber-700 h-16 sticky top-0">
      <Link onClick={() => setOpen(false)} href={AppRoutes.root.path}>
        DND-HELPER
      </Link>

      <HeaderMenu open={open} setOpen={setOpen} />

      <div className="ml-auto">
        <Link href={AppRoutes.admin.path}>ADMIN</Link>
      </div>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="block sm:hidden"
      >
        Меню
      </button>
    </header>
  )
}
