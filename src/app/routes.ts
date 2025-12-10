export interface IRoute {
  path: string
  backPath?: string
  label?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getPath?: (...args: any[]) => string
}
export interface IRouteConfig {
  [key: string]: IRoute | IRouteConfig
}

export const AppRoutes = {
  root: { path: '/' },
  characters: {
    path: '/characters',
    label: 'Персонажи',
    create: {
      path: '/characters/create',
      getPath: () => '/characters/create'
    }
  },
  rooms: {
    path: '/rooms',
    label: 'Комнаты',
    create: {
      path: '/rooms/create',
      getPath: () => '/rooms/create'
    }
  }
}
