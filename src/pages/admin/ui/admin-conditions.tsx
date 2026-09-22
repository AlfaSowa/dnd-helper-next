'use client'

import {
  useAddConditionMutation,
  useDeleteConditionMutation,
  useGetConditionsQuery
} from '@/containers/conditions'
import { CreateAbilityDto } from '@/shared/api/Api'
import { CreateContent } from '@/widgets/create-content'
import { conditionCreateFormConfig } from '../lib'

export const AdminConditions = () => {
  const { data } = useGetConditionsQuery()
  const [addCondition] = useAddConditionMutation()
  const [deleteCondition] = useDeleteConditionMutation()

  const handleDelete = (uuid: string) => {
    deleteCondition(uuid)
  }

  const onSubmit = (data: CreateAbilityDto) => {
    addCondition(data)
  }

  return (
    <CreateContent
      formConfig={conditionCreateFormConfig()}
      onSubmit={onSubmit}
      buttonTxt="Добавить тип состояние"
      elements={data}
      handleDelete={handleDelete}
    />
  )
}
