import { AppRoutes } from '@/app/routes'
import { Card, Section } from '@/shared/ui'

export const Page = () => {
  const links = [
    {
      path: AppRoutes.heroes.classes.path,
      title: 'Классы'
    },
    {
      path: AppRoutes.heroes.species.path,
      title: 'Виды'
    },
    {
      path: AppRoutes.heroes.backgrounds.path,
      title: 'Предистории'
    }
  ]

  return (
    <Section>
      <div className="flex gap-4">
        {links.map((i) => (
          <Card key={i.path} link={i.path} title={i.title} />
        ))}
      </div>
    </Section>
  )
}
