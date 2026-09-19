import { Card } from '@/shared/ui'

type ElementsType = {
  title: string
  path: string
  hint: string
}

type CardsGridProps<T> = {
  elements: T[]
}
export const CardsGrid = <T extends ElementsType>({
  elements
}: CardsGridProps<T>) => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
      {elements.map((i) => (
        <Card link={i.path} title={i.hint} key={i.path}>
          {i.title}
        </Card>
      ))}
    </div>
  )
}
