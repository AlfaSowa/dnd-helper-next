import { AppRoutes } from '@/app/routes'
import Link from 'next/link'
import { HeaderMenu } from './header-menu'

export const Header = () => {
  return (
    <header className="flex gap-8 bg-amber-700 p-4 sticky top-0">
      <Link href={AppRoutes.root.path}>DND-HELPER</Link>
      <HeaderMenu />
    </header>
  )
}
