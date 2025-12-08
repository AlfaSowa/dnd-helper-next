import { routes } from '@/app/routes'
import { MenuItem } from '@/shared/ui'

export const HeaderMenu = () => {
  return (
    <ul className="flex gap-2 items-center">
      {routes.map((route) => (
        <MenuItem key={route.path} item={{ title: route.name, path: route.path }} />
      ))}
    </ul>
  )
}
