'use client'

import {
  useAddMonsterSizeMutation,
  useDeleteMonsterSizeMutation,
  useGetMonsterSizesQuery
} from '@/containers/bestiary/api/monster-size'
import { CreateMonsterTypeDto } from '@/shared/api/Api'
import { CreateContent } from '@/widgets/create-content'
import { bestiaryMonsterSizeCreateFormConfig } from '../lib'

export const AdminBestiaryMonsterSize = () => {
  const { data } = useGetMonsterSizesQuery()
  const [addMonsterSize] = useAddMonsterSizeMutation()
  const [deletMonsterSize] = useDeleteMonsterSizeMutation()

  const handleDelete = (uuid: string) => {
    deletMonsterSize(uuid)
  }

  const onSubmit = (data: CreateMonsterTypeDto) => {
    addMonsterSize(data)
  }

  return (
    <CreateContent
      formConfig={bestiaryMonsterSizeCreateFormConfig()}
      onSubmit={onSubmit}
      buttonTxt="Добавить размер монстра"
      elements={data}
      handleDelete={handleDelete}
    />
  )
}
