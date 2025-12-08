import { HeaderMenu } from './header-menu'

export const Header = () => {
  return (
    <header className="flex gap-8 bg-amber-700 p-4 sticky top-0">
      <div>DND-HELPER</div>

      <HeaderMenu />

      <div className="ml-auto">ПРОФИЛЬ</div>
    </header>
  )
}
