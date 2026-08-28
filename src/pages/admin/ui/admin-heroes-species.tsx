'use client'

import {
  useAddSpeciesMutation,
  useDeleteSpeciesMutation,
  useGetSpeciesQuery
} from '@/containers/species'
import { CreateSpeciesDto } from '@/shared/api/Api'
import { Button, Modal, Section } from '@/shared/ui'
import { Form, FormControls } from '@/widgets/form'
import { useForm } from '@/widgets/form/hooks'
import { useState } from 'react'
import { heroesSpeciesCreateFormConfig } from '../lib'

export const AdminHeroesSpecies = () => {
  const [open, setOpen] = useState(false)

  const { data } = useGetSpeciesQuery()
  const [addSpecies] = useAddSpeciesMutation()
  const [deleteSpecies] = useDeleteSpeciesMutation()

  const form = useForm<CreateSpeciesDto>({
    config: heroesSpeciesCreateFormConfig()
  })

  const onSubmit = (data: CreateSpeciesDto) => {
    addSpecies(data)
  }

  const handleDelete = (uuid: string) => {
    deleteSpecies(uuid)
  }

  return (
    <div>
      <Section>
        <div className="flex flex-col gap-2">
          {data?.map((i) => (
            <div key={i.uuid}>
              <div className="flex gap-4">
                <div>{i.uuid}</div>
                <div>{i.name}</div>
                <div className="ml-auto">
                  <Button onClick={() => handleDelete(i.uuid)}>удалить</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="flex gap-2">
        <Button onClick={() => setOpen(true)}>Добавить вид</Button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Form<CreateSpeciesDto> onSubmit={(data) => onSubmit(data)} form={form}>
          <div className="flex flex-col gap-6">
            <FormControls form={form} />

            <div>
              <Button type="submit">Принять</Button>
            </div>
          </div>
        </Form>
      </Modal>
    </div>
  )
}
