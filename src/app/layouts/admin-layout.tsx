import { MenuItem } from '@/shared/ui'
import { AppRoutes } from '../routes'

export const AdminLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const menu = [
    {
      title: 'Админ',
      path: AppRoutes.admin.path
    },
    {
      title: 'Классы',
      path: AppRoutes.admin.classes.path
    },
    {
      title: 'Виды',
      path: AppRoutes.admin.species.path
    },
    {
      title: 'Регионы',
      path: AppRoutes.admin.regions.path
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
