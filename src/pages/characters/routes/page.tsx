import { AppRoutes } from '@/app/routes'
import { Card, Section } from '@/shared/ui'

export const Page = () => {
  const сharacters = ['1', '2', '3', '4', '5', '6']

  return (
    <Section>
      <div className="grid grid-cols-5 gap-6">
        {сharacters.map((сharacterId) => (
          <Card
            link={AppRoutes.characters.details.getPath(сharacterId)}
            key={сharacterId}
          >
            {сharacterId}
          </Card>
        ))}

        <Card link={AppRoutes.characters.create.path}>Добавить нового</Card>
      </div>
    </Section>
  )
}
