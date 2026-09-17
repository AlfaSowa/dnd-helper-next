'use client'
import { AppRoutes } from '@/app/routes'
import { Card, Section } from '@/shared/ui'

export const Page = () => {
  const charactersMenu = [
    {
      title: 'Классы',
      path: AppRoutes.heroes.classes.path,
      hint: 'Все о классах персонажей'
    },
    {
      title: 'Виды',
      path: AppRoutes.heroes.species.path,
      hint: 'Все о видах персонажей'
    },
    {
      title: 'Предыстории',
      path: AppRoutes.heroes.backgrounds.path,
      hint: 'Все о предысториях персонажей'
    }
  ]

  const worldMenu = [
    {
      title: 'Регионы',
      path: AppRoutes.world.regions.path,
      hint: 'Все о регионах Эфериса'
    },
    {
      title: 'Бестиарий',
      path: AppRoutes.bestiary.path,
      hint: 'Все о монстрах  Эфериса'
    }
  ]

  const glossaryMenu = [
    {
      title: 'Об Эферисе',
      path: AppRoutes.glossary.about.path,
      hint: 'Добро пожаловать в Эферис'
    },
    {
      title: 'Механики',
      path: AppRoutes.glossary.mechanics.path,
      hint: 'Механики'
    },
    {
      title: 'Трансформации',
      path: AppRoutes.glossary.transformations.path,
      hint: 'Трансформации'
    },
    {
      title: 'Пантеон',
      path: AppRoutes.glossary.pantheon.path,
      hint: 'Все о Пантеоне Эфериса'
    }
  ]

  return (
    <div className="flex flex-col gap-6">
      <Section title="Персонажи">
        <div className="grid grid-cols-6 gap-2">
          {charactersMenu.map((i) => (
            <Card link={i.path} title={i.hint} key={i.path}>
              {i.title}
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Мир Эфериса">
        <div className="grid grid-cols-6 gap-2">
          {worldMenu.map((i) => (
            <Card link={i.path} title={i.hint} key={i.path}>
              {i.title}
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Глосарий">
        <div className="grid grid-cols-6 gap-2">
          {glossaryMenu.map((i) => (
            <Card link={i.path} title={i.hint} key={i.path}>
              {i.title}
            </Card>
          ))}
        </div>
      </Section>
    </div>
  )
}
