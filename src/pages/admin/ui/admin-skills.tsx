'use client'

import {
  useAddSkillMutation,
  useDeleteSkillMutation,
  useGetSkillsQuery
} from '@/containers/skills'
import { CreateSkillDto } from '@/shared/api/Api'
import { CreateContent } from '@/widgets/create-content'
import { skillCreateFormConfig } from '../lib'

export const AdminSkills = () => {
  const { data } = useGetSkillsQuery()
  const [addSkill] = useAddSkillMutation()
  const [deleteSkill] = useDeleteSkillMutation()

  const handleDelete = (uuid: string) => {
    deleteSkill(uuid)
  }

  const onSubmit = (data: CreateSkillDto) => {
    addSkill(data)
  }

  return (
    <CreateContent
      formConfig={skillCreateFormConfig()}
      onSubmit={onSubmit}
      buttonTxt="Добавить навык"
      elements={data}
      additionalFields={['code', 'description']}
      handleDelete={handleDelete}
    />
  )
}
