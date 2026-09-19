import { AppRoutes } from '@/app/routes'
import { MenuItem, Portal } from '@/shared/ui'

type HeaderMenuProps = {
  open: boolean
  setOpen: (value: boolean) => void
}

export const HeaderMenu = ({ open, setOpen }: HeaderMenuProps) => {
  const menu = [
    {
      title: 'Герои',
      path: AppRoutes.heroes.path,
      hint: 'Все о создании героев в мире Эфериса'
    },
    {
      title: 'Мир',
      path: AppRoutes.world.path,
      hint: 'Все о мире Эфериса'
    },
    {
      title: 'Бестиарий',
      path: AppRoutes.bestiary.path,
      hint: 'Монстры Эфериса'
    },
    {
      title: 'Глосарий',
      path: AppRoutes.glossary.path,
      hint: 'Глосарий'
    },
    {
      title: 'Мои персонажи',
      path: AppRoutes.characters.path,
      hint: 'Мои персонажи'
    }
  ]

  return (
    <>
      <ul className="hidden sm:flex gap-2 items-center">
        {menu.map((item) => (
          <MenuItem key={item.path} item={item} />
        ))}
      </ul>

      {open && (
        <Portal>
          <div className="absolute bg-bg w-full h-[calc(100%-64px)] top-16 left-0 py-4">
            <ul className="flex flex-col">
              {menu.map((item) => (
                <MenuItem
                  onClick={() => setOpen(false)}
                  className="p-2 pointer"
                  key={item.path}
                  item={item}
                />
              ))}
            </ul>
          </div>
        </Portal>
      )}
    </>
  )
}
