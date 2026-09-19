'use client'
import { AppRoutes } from '@/app/routes'
import { CardsGrid } from '@/entities/cards-grid'
import { Section } from '@/shared/ui'

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
        <CardsGrid elements={charactersMenu} />
      </Section>

      <Section title="Мир Эфериса">
        <CardsGrid elements={worldMenu} />
      </Section>

      <Section title="Глосарий">
        <CardsGrid elements={glossaryMenu} />
      </Section>
    </div>
  )
}
