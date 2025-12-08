import Link from 'next/link'

export const RoomsPage = () => {
  const rooms = ['1', '2', '3']

  console.log('RoomsPage')

  return (
    <div>
      <div>RoomsListPage</div>

      <div className="flex gap-2">
        {rooms.map((room) => (
          <Link href={`/rooms/${room}`} key={room}>
            <div className="px-4 bg-amber-800">{room}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
