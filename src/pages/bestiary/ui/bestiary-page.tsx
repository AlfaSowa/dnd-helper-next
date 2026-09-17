'use client'

import { AppRoutes } from '@/app/routes'
import { useGetBestiaryQuery } from '@/containers/bestiary/api/monster'
import { Card, Section } from '@/shared/ui'

export const BestiaryPage = () => {
  const { data } = useGetBestiaryQuery()

  return (
    <Section>
      <div className="grid grid-cols-6 gap-2">
        {data?.map((i) => (
          <Card
            link={AppRoutes.bestiary.details.getPath(i.uuid)}
            title={i.type.name}
            key={i.uuid}
          >
            {i.name}
          </Card>
        ))}
      </div>
    </Section>
  )
}
