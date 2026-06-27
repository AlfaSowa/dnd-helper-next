'use client'

import { useGetClassesQuery } from '@/containers/classes'

export const HeroesClasses = () => {
  const { data } = useGetClassesQuery()

  console.log(data)

  return <div>123</div>
}
