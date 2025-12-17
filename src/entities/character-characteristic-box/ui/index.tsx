'use client'

import { twMerge } from 'tailwind-merge'

type StatsType = {
  id: string
  name: string
  value: number
}

type CharacteristicType = {
  id: string
  title: string
  value: number
  modifier: number
  stats: StatsType[]
}

interface CharacterCharacteristicBoxProps {
  item: CharacteristicType
  onChange?: (id: string, value: number) => void
}

export const CharacterCharacteristicBox = ({
  item,
  onChange
}: CharacterCharacteristicBoxProps) => {
  return (
    <div className="border border-gray-300 rounded p-2 flex flex-col gap-2 bg-gray-200">
      <div className="flex justify-between items-center border-b border-gray-300 pb-2">
        <div className="text-sm">{item.title}</div>

        <div className="flex gap-2 items-center">
          <input
            type="number"
            readOnly={!onChange}
            defaultValue={item.value}
            className={twMerge('w-8 h-8')}
            onChange={(v) => onChange?.(item.id, Number(v.target.value))}
          />

          <div className="text-sm bg-amber-700 w-6 h-6 flex items-center justify-center rounded-full">
            {item.modifier}
          </div>
        </div>
      </div>

      <div>
        {item.stats.map((stat) => (
          <div
            className="flex justify-between text-xs text-gray-700"
            key={stat.id}
          >
            <div>{stat.name}</div>
            <div>{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
