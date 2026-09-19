'use client'

import {
  useAddAbilityMutation,
  useDeleteAbilityMutation,
  useGetAbilitiesQuery
} from '@/containers/abilities'
import { CreateAbilityDto } from '@/shared/api/Api'
import { CreateContent } from '@/widgets/create-content'
import { abilityCreateFormConfig } from '../lib'

export const AdminAbilities = () => {
  const { data } = useGetAbilitiesQuery()
  const [addAbility] = useAddAbilityMutation()
  const [deleteAbility] = useDeleteAbilityMutation()

  const handleDelete = (uuid: string) => {
    deleteAbility(uuid)
  }

  const onSubmit = (data: CreateAbilityDto) => {
    addAbility(data)
  }

  return (
    <CreateContent
      formConfig={abilityCreateFormConfig()}
      onSubmit={onSubmit}
      buttonTxt="Добавить характеристику"
      elements={data}
      additionalFields={['code', 'description']}
      handleDelete={handleDelete}
    />
  )
}
