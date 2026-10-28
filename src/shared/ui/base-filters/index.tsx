'use client'

interface BaseFiltersProps<T> {
  data?: T[]
  reset: () => void
  onClick: (uuid: string) => void
}

export const BaseFilters = <T extends { uuid: string; name: string }>({
  data,
  reset,
  onClick
}: BaseFiltersProps<T>) => {
  return (
    <div className="flex gap-2 text-xs">
      <button
        className="rounded p-1 bg-main hover:bg-secondary cursor-pointer"
        onClick={() => reset()}
      >
        Все
      </button>

      {data?.map((i) => (
        <button
          className="rounded p-1 bg-main hover:bg-secondary cursor-pointer"
          onClick={() => onClick(i.uuid)}
          key={i.uuid}
        >
          {i.name}
        </button>
      ))}
    </div>
  )
}
