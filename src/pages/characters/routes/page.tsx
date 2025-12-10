import { Card, Section } from '@/shared/ui'

export const CharactersPage = () => {
  const сharacters = ['1', '2', '3', '4', '5', '6']
  return (
    <Section>
      <div className="grid grid-cols-5 gap-6">
        {сharacters.map((сharacter) => (
          <Card link={`/rooms/${сharacter}`} key={сharacter}>
            {сharacter}
          </Card>
        ))}
      </div>
    </Section>
  )
}
