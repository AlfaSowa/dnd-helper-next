'use client'

import { useGetRegionsQuery } from '@/containers/regions'
import { ShowContent } from '@/widgets/show-content'

export const RegionsPage = () => {
  const { data } = useGetRegionsQuery()

  return <ShowContent data={data} />
}
