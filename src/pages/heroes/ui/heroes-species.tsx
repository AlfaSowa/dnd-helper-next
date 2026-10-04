'use client'

import { useGetSpeciesQuery } from '@/containers/species'
import { ShowContent } from '@/widgets/show-content'

export const HeroesSpecies = () => {
  const { data } = useGetSpeciesQuery()

  return <ShowContent data={data} />
}
