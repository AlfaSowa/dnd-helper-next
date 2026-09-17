'use client'

import {
  useAddRegionMutation,
  useDeleteRegionMutation,
  useGetRegionsQuery
} from '@/containers/regions'
import { CreateRegionDto } from '@/shared/api/Api'
import { CreateContent } from '@/widgets/create-content'
import { worldRegionsCreateFormConfig } from '../lib'

export const AdminWorldRegions = () => {
  const { data } = useGetRegionsQuery()
  const [addRegion] = useAddRegionMutation()
  const [deleteRegion] = useDeleteRegionMutation()

  const onSubmit = (data: CreateRegionDto) => {
    addRegion(data)
  }

  const handleDelete = (uuid: string) => {
    deleteRegion(uuid)
  }

  return (
    <CreateContent
      formConfig={worldRegionsCreateFormConfig()}
      onSubmit={onSubmit}
      buttonTxt="Добавить регион"
      elements={data}
      elementsTitle="регионы"
      handleDelete={handleDelete}
    />
  )
}
