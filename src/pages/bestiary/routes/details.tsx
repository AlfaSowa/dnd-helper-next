import { MonsterDetails } from '../ui'

export const BestiaryDetailsPage = async ({
  params
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params

  return (
    <div>
      <MonsterDetails id={id} />
    </div>
  )
}
