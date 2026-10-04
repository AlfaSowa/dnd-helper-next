'use client'

import { useGetSpeciesQuery } from '@/containers/species'
import { Section } from '@/shared/ui'
import { ShowContent } from '@/widgets/show-content'

export const HeroesSpeciesPage = () => {
  const { data } = useGetSpeciesQuery()

  return (
    <Section>
      <ShowContent data={data} />
    </Section>
  )
}
