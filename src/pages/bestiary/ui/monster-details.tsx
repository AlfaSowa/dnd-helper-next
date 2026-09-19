'use client'

import { useGetMonsterQuery } from '@/containers/bestiary/api/monster'

type MonsterDetailsProps = {
  id: string
}

export const MonsterDetails = ({ id }: MonsterDetailsProps) => {
  const { data } = useGetMonsterQuery(id)

  console.log(123, data)

  return (
    <div>
      <div className="flex items-center gap-2">
        <div>{data?.name}</div>
        <div>{data?.type?.name}</div>
      </div>
    </div>
  )
}
