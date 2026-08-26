'use client'

import { useGetRegionsQuery } from '@/containers/regions'
import Markdown from 'react-markdown'

export const RegionsPage = () => {
  const { data } = useGetRegionsQuery()

  return (
    <div className="flex flex-col gap-4">
      {data?.map((i) => (
        <div key={i.uuid} className="bg-amber-300 py-1 px-2 rounded">
          <div>{i.name}</div>

          <p>{i.description}</p>

          <Markdown>{i.markdown}</Markdown>
        </div>
      ))}
    </div>
  )
}
