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
    },
    bestiary: {
      path: '/admin/bestiary',
      monsterType: {
        path: '/admin/bestiary/monster-type'
      }
    }
  },
  glossary: {
    path: '/glossary',
    label: 'глосарий',
    about: {
      path: '/glossary/about',
      label: 'Добро пожаловать в Эферис'
    },
    mechanics: {
      path: '/glossary/mechanics',
      label: 'Механики'
    },
    transformations: {
      path: '/glossary/transformations',
      label: 'Трансформации'
    },
    pantheon: {
      path: '/glossary/pantheon',
      label: 'Пантеон'
    }
  },
  heroes: {
    path: '/heroes',
    label: 'Герои',
    classes: {
      path: '/heroes/classes',
      label: 'Классы'
    },
    backgrounds: {
      path: '/heroes/backgrounds',
      label: 'Происхождения'
    },
    species: {
      path: '/heroes/species',
      label: 'Виды'
    }
  },
  world: {
    path: '/world',
    label: 'Мир',
    regions: {
      path: '/world/regions',
      label: 'Регионы'
    },
    factions: {
      path: '/world/factions',
      label: 'Фракции'
    }
  },
  bestiary: {
    path: '/bestiary',
    label: 'Монстры',
    details: {
      path: '/bestiary/:id',
      getPath: (id: string) => `/bestiary/${id}`
    }
  },
  characters: {
    path: '/characters',
    label: 'Персонажи',
    details: {
      path: '/characters/:id',
      getPath: (id: string) => `/characters/${id}`,
      label: 'Детали персонажа'
    },
    create: {
      path: '/characters/create',
      label: 'Создание персонажа'
    }
  }
}
