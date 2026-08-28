'use client'

import { useGetSpeciesQuery } from '@/containers/species'
import { useMemo, useState } from 'react'
import Markdown from 'react-markdown'

export const HeroesSpecies = () => {
  const { data } = useGetSpeciesQuery()
  const [selectedUuid, setSelectedUuid] = useState<string | null>(null)

  const filteredSpecies = useMemo(() => {
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
        {filteredSpecies.map((i) => (
          <div key={i.uuid} className="bg-amber-300 py-1 px-2 rounded">
            <div>{i.name}</div>

            <p>{i.description}</p>

            <Markdown>{i.markdown}</Markdown>
          </div>
        ))}
      </div>
    </div>
  )
}
