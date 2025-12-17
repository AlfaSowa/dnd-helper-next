export const RoomPage = async ({
  params
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params

  console.log('params', id)
  console.log('RoomPage')
  return (
    <div>
      <div>RoomPage-id: {id}</div>
    </div>
  )
}
