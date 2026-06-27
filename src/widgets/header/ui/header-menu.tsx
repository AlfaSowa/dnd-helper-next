import { AppRoutes } from '@/app/routes'
import { MenuItem } from '@/shared/ui'

export const HeaderMenu = () => {
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
