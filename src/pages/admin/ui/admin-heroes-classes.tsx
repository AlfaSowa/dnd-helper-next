'use client'

import {
  useAddClassMutation,
  useDeleteClassMutation,
  useGetClassesQuery
} from '@/containers/classes'
import {
  useAddSubclassMutation,
  useDeleteSubclassMutation,
  useGetSubclassesQuery
} from '@/containers/subclasses'
import { CreateClassDto, CreateSubclassDto } from '@/shared/api/Api'
import { CreateContent } from '@/widgets/create-content'
import { useMemo } from 'react'
import {
  heroesClassCreateFormConfig,
  heroesSubclassCreateFormConfig
} from '../lib'

export const AdminHeroesClasses = () => {
  const { data: classes } = useGetClassesQuery()
  const [addClass] = useAddClassMutation()
  const [deleteClass] = useDeleteClassMutation()

  const { data: subclasses } = useGetSubclassesQuery()
  const [addSubclass] = useAddSubclassMutation()
  const [deleteSubclass] = useDeleteSubclassMutation()

  const handleClassDelete = (uuid: string) => {
    deleteClass(uuid)
  }

  const handleSubclassDelete = (uuid: string) => {
    deleteSubclass(uuid)
  }

  const subclassesOptions = useMemo(() => {
    return (subclasses || []).map((i) => {
      return {
        name: i.name,
        value: i.uuid
      }
    })
  }, [subclasses])

  const onClassSubmit = (data: CreateClassDto) => {
    addClass(data)
  }

  const onSubclassSubmit = (data: CreateSubclassDto) => {
    addSubclass(data)
  }

  return (
    <>
      <CreateContent
        formConfig={heroesClassCreateFormConfig(subclassesOptions)}
        onSubmit={onClassSubmit}
        buttonTxt="Добавить класс"
        elements={classes}
        elementsTitle="Классы"
        handleDelete={handleClassDelete}
      />
      <CreateContent
        formConfig={heroesSubclassCreateFormConfig()}
        onSubmit={onSubclassSubmit}
        buttonTxt="Добавить подкласс"
        elements={subclasses}
        elementsTitle="Подклассы"
        handleDelete={handleSubclassDelete}
      />
    </>
  )
}
