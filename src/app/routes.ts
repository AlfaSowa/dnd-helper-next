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
  root: {
    path: '/'
  },
  admin: {
    path: '/admin',
    label: 'Админ панель',
    classes: {
      path: '/admin/classes'
    },
    regions: {
      path: '/admin/regions'
    },
    species: {
      path: '/admin/species'
    }
  },
  characters: {
    path: '/characters',
    label: 'Персонажи',
    create: {
      path: '/characters/create',
      getPath: () => '/characters/create'
    },
    details: {
      path: '/characters/:id',
      getPath: (id: string) => `/characters/${id}`
    }
  },
  heroes: {
    path: '/heroes',
    label: 'Герои',
    classes: {
      path: '/heroes/classes'
    },
    backgrounds: {
      path: '/heroes/backgrounds'
    },
    species: {
      path: '/heroes/species'
    }
  },
  world: {
    path: '/world',
    label: 'Мир',
    regions: {
      path: '/world/regions'
    }
  },
  bestiary: {
    path: '/bestiary',
    label: 'Монстры',
    details: {
      path: '/bestiary/:id',
      getPath: (id: string) => `/bestiary/${id}`
    }
  }
}
