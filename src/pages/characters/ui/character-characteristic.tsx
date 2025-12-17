'use client'

import { CharacterCharacteristicBox } from '@/entities'
import { Section } from '@/shared/ui'
import { mockCharacteristicsData } from '../model'

export const CharacterCharacteristic = () => {
  const handleChange = (id: string, value: number) => {
    console.log(id, value)
  }

  return (
    <Section title="Характеристики" RightContent={<div>12312</div>}>
      <div className="grid grid-cols-5 gap-2">
        {mockCharacteristicsData.map((e) => (
          <CharacterCharacteristicBox
            onChange={handleChange}
            item={e}
            key={e.id}
          />
        ))}
      </div>
    </Section>
  )
}
