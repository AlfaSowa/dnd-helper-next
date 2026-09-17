'use client'

import {
  useAddMonsterTypeMutation,
  useDeleteMonsterTypeMutation,
  useGetMonsterTypesQuery
} from '@/containers/bestiary/api/monster-type'
import { CreateMonsterTypeDto } from '@/shared/api/Api'
import { CreateContent } from '@/widgets/create-content'
import { bestiaryMonsterTypeCreateFormConfig } from '../lib'

export const AdminBestiaryMonsterType = () => {
  const { data } = useGetMonsterTypesQuery()
  const [addMonsterType] = useAddMonsterTypeMutation()
  const [deletMonsterType] = useDeleteMonsterTypeMutation()

  const handleDelete = (uuid: string) => {
    deletMonsterType(uuid)
  }

  const onSubmit = (data: CreateMonsterTypeDto) => {
    addMonsterType(data)
  }

  return (
    <CreateContent
      formConfig={bestiaryMonsterTypeCreateFormConfig()}
      onSubmit={onSubmit}
      buttonTxt="Добавить тип монстра"
      elements={data}
      handleDelete={handleDelete}
    />
  )
}
