'use client'

import { useGetClassesQuery } from '@/containers/classes'
import { useMemo, useState } from 'react'
import Markdown from 'react-markdown'

export const HeroesClasses = () => {
  const { data } = useGetClassesQuery()
  const [selectedUuid, setSelectedUuid] = useState<string | null>(null)

  const filteredClasses = useMemo(() => {
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
      <div className="flex gap-2">
        <button
          className="rounded p-1 bg-amber-600 cursor-pointer"
          onClick={() => handleReset()}
        >
          Все
        </button>

        {data?.map((i) => (
          <button
            className="rounded p-1 bg-amber-600 cursor-pointer"
            onClick={() => handleClick(i.uuid)}
            key={i.uuid}
          >
            {i.name}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {filteredClasses.map((i) => (
          <div key={i.uuid} className="bg-amber-300 py-1 px-2 rounded">
            <div>{i.name}</div>

            <div className="flex flex-col gap-2">
              {i.subclasses?.map((j) => (
                <div key={j.uuid} className="bg-amber-700 py-1 px-2 rounded">
                  <div className="text-2xl">{j.name}</div>

                  <p>{j.description}</p>

                  <Markdown>{j.markdown}</Markdown>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
