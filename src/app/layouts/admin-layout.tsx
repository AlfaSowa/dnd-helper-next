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
      title: 'Герои',
      path: AppRoutes.admin.heroes.path
    },
    {
      title: 'Мир',
      path: AppRoutes.admin.world.path
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
