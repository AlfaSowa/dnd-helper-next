import { Section } from '@/shared/ui'

export const BestiaryDetailsPage = async ({
  params
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params

  return <Section>BestiaryDetailsPage - {id} </Section>
}
