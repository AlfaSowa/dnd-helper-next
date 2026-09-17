'use client'

import {
  useAddMonsterMutation,
  useDeleteMonsterMutation,
  useGetBestiaryQuery
} from '@/containers/bestiary/api/monster'
import { useGetMonsterTypesQuery } from '@/containers/bestiary/api/monster-type'
import { CreateMonsterDto } from '@/shared/api/Api'
import { CreateContent } from '@/widgets/create-content'
import { useMemo } from 'react'
import { bestiaryMonsterCreateFormConfig } from '../lib'

export const AdminBestiaryMonster = () => {
  const { data } = useGetBestiaryQuery()
  const [addMonster] = useAddMonsterMutation()
  const [deletMonster] = useDeleteMonsterMutation()

  const { data: monsterTypes } = useGetMonsterTypesQuery()

  const monsterTypesOptions = useMemo(() => {
    return (monsterTypes || []).map((i) => {
      return {
        name: i.name,
        value: i.uuid
      }
    })
  }, [monsterTypes])

  const handleDelete = (uuid: string) => {
    deletMonster(uuid)
  }

  const onSubmit = (data: CreateMonsterDto) => {
    addMonster(data)
  }

  return (
    <CreateContent
      formConfig={bestiaryMonsterCreateFormConfig({
        monsterTypesOptions: monsterTypesOptions
      })}
      onSubmit={onSubmit}
      buttonTxt="Добавить монстра"
      elements={data}
      handleDelete={handleDelete}
    />
  )
}
