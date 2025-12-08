export type RouteType = {
  name: string
  path: string
}

export const routes: RouteType[] = [
  {
    name: 'Главная',
    path: '/'
  },
  {
    name: 'Готовые персонажы',
    path: '/characters'
  },
  {
    name: 'Комнаты',
    path: '/rooms'
  }
]
