import { MenuItem } from '@/shared/ui'
import { AppRoutes } from '../routes'

export const BestiaryLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const menu = [
    {
      title: 'Монстры',
      path: AppRoutes.admin.bestiary.path
    },
    {
      title: 'Типы монстров',
      path: AppRoutes.admin.bestiary.monsterType.path
    }
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="py-4">
        <ul className="flex gap-2 items-center">
          {menu.map((item) => (
            <MenuItem key={item.path} item={item} />
          ))}
        </ul>
      </div>

      <div>{children}</div>
    </div>
  )
}
