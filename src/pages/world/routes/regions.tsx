'use client'

import { useGetRegionsQuery } from '@/containers/regions'
import Markdown from 'react-markdown'

export const RegionsPage = () => {
  const { data } = useGetRegionsQuery()

  return (
    <div className="flex flex-col gap-4">
      {data?.map((i) => (
        <div key={i.uuid} className="">
          <h2>{i.name}</h2>

          <p>{i.description}</p>

          <Markdown>{i.markdown}</Markdown>
        </div>
      ))}
    </div>
  )
}
