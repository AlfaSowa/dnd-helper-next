import { AppRoutes } from '@/app/routes'
import { MenuItem } from '@/shared/ui'

export const HeaderMenu = () => {
  const menu = [
    {
      title: 'Главная',
      path: AppRoutes.root.path
    },
    {
      title: 'Готовые персонажы',
      path: AppRoutes.characters.path
    },
    {
      title: 'Комнаты',
      path: AppRoutes.rooms.path
    }
  ]

  return (
    <ul className="flex gap-2 items-center">
      {menu.map((item) => (
        <MenuItem key={item.path} item={item} />
      ))}
    </ul>
  )
}
