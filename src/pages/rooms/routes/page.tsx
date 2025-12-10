'use client'

import { Card, Section } from '@/shared/ui'

export const RoomsPage = () => {
  const rooms = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

  console.log('RoomsPage')

  return (
    <Section>
      <div className="grid grid-cols-5 gap-6">
        {rooms.map((room) => (
          <Card link={`/rooms/${room}`} key={room}>
            {room}
          </Card>
        ))}
      </div>
    </Section>
  )
}
