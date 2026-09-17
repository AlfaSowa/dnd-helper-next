'use client'

import {
  useAddSpeciesMutation,
  useDeleteSpeciesMutation,
  useGetSpeciesQuery
} from '@/containers/species'
import { CreateSpeciesDto } from '@/shared/api/Api'
import { CreateContent } from '@/widgets/create-content'
import { heroesSpeciesCreateFormConfig } from '../lib'

export const AdminHeroesSpecies = () => {
  const { data } = useGetSpeciesQuery()
  const [addSpecies] = useAddSpeciesMutation()
  const [deleteSpecies] = useDeleteSpeciesMutation()

  const onSubmit = (data: CreateSpeciesDto) => {
    addSpecies(data)
  }

  const handleDelete = (uuid: string) => {
    deleteSpecies(uuid)
  }

  return (
    <CreateContent
      formConfig={heroesSpeciesCreateFormConfig()}
      onSubmit={onSubmit}
      buttonTxt="Добавить вид"
      elements={data}
      elementsTitle="Виды"
      handleDelete={handleDelete}
    />
  )
}
