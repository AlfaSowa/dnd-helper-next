'use client'

import { BaseFilters } from '@/shared/ui'
import { useMemo, useState } from 'react'
import Markdown from 'react-markdown'

type DataType = {
  uuid: string
  name: string
  description: string
  markdown: string
}

type ShowContentProps<T> = {
  data?: T[]
}
export const ShowContent = <T extends DataType>({
  data
}: ShowContentProps<T>) => {
  const [selectedUuid, setSelectedUuid] = useState<string | null>(null)

  const filteredData = useMemo(() => {
    if (!data) return []

    if (!selectedUuid) {
      return data
    }

    return data.filter((item) => item.uuid === selectedUuid)
  }, [data, selectedUuid])

  const handleClick = (uuid: string) => {
    setSelectedUuid(uuid)
  }

  const handleReset = () => {
    setSelectedUuid(null)
  }

  return (
    <div className="flex flex-col gap-2">
      <BaseFilters onClick={handleClick} reset={handleReset} data={data} />

      <div className="flex flex-col gap-4">
        {filteredData?.map((i) => (
          <div key={i.uuid} className="">
            <h2>{i.name}</h2>

            <p>{i.description}</p>

            <Markdown>{i.markdown}</Markdown>
          </div>
        ))}
      </div>
    </div>
  )
}
