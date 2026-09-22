'use client'

import {
  useAddDamageMutation,
  useDeleteDamageMutation,
  useGetDamagesQuery
} from '@/containers/damages'
import { CreateDamageDto } from '@/shared/api/Api'
import { CreateContent } from '@/widgets/create-content'
import { damageCreateFormConfig } from '../lib'

export const AdminDamages = () => {
  const { data } = useGetDamagesQuery()
  const [addDamage] = useAddDamageMutation()
  const [deleteDamage] = useDeleteDamageMutation()

  const handleDelete = (uuid: string) => {
    deleteDamage(uuid)
  }

  const onSubmit = (data: CreateDamageDto) => {
    addDamage(data)
  }

  return (
    <CreateContent
      formConfig={damageCreateFormConfig()}
      onSubmit={onSubmit}
      buttonTxt="Добавить тип урона"
      elements={data}
      handleDelete={handleDelete}
    />
  )
}
