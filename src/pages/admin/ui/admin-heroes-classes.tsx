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
import { Button, Modal, Section } from '@/shared/ui'
import { Form, FormControls } from '@/widgets/form'
import { useForm } from '@/widgets/form/hooks'
import { useMemo, useState } from 'react'
import Markdown from 'react-markdown'
import {
  heroesClassCreateFormConfig,
  heroesSubclassCreateFormConfig
} from '../lib'

export const AdminHeroesClasses = () => {
  const [openCreateClassModal, setOpenCreateClassModal] = useState(false)
  const [openCreateSubClassModal, setOpenCreateSubClassModal] = useState(false)

  const { data: classes } = useGetClassesQuery()
  const [addClass] = useAddClassMutation()
  const [deleteClass] = useDeleteClassMutation()

  const { data: subclasses } = useGetSubclassesQuery()
  const [addSubclass] = useAddSubclassMutation()
  const [deleteSubclass] = useDeleteSubclassMutation()

  const handleDelete = (uuid: string, type: 'class' | 'subclass') => {
    if (type === 'class') {
      deleteClass(uuid)
    }
    if (type === 'subclass') {
      deleteSubclass(uuid)
    }
  }

  const subclassesOptions = useMemo(() => {
    return (subclasses || []).map((i) => {
      return {
        name: i.name,
        value: i.uuid
      }
    })
  }, [subclasses])

  const classForm = useForm<CreateClassDto>({
    config: heroesClassCreateFormConfig(subclassesOptions)
  })
  const subclassForm = useForm<CreateSubclassDto>({
    config: heroesSubclassCreateFormConfig()
  })

  const onSubmit = (
    data: CreateClassDto | CreateSubclassDto,
    type: 'class' | 'subclass'
  ) => {
    if (type === 'class') {
      addClass(data)
    }
    if (type === 'subclass') {
      addSubclass(data)
    }

    setOpenCreateSubClassModal(false)
    setOpenCreateClassModal(false)
  }

  return (
    <>
      <div className="flex flex-col gap-6">
        <Section>
          <div className="flex flex-col gap-2">
            {classes?.map((i) => (
              <div key={i.uuid}>
                <div className="flex gap-4">
                  <div>{i.uuid}</div>
                  <div>{i.name}</div>
                  <div className="ml-auto">
                    <Button onClick={() => handleDelete(i.uuid, 'class')}>
                      удалить
                    </Button>
                  </div>
                </div>

                {i.subclasses.length > 0 && (
                  <div className="bg-amber-300 p-2">
                    {i.subclasses.map((s) => (
                      <div className="flex gap-4" key={s.uuid}>
                        <div>{s.uuid}</div>
                        <div>{s.name}</div>
                        <div className="ml-auto">
                          <button
                            className="cursor-pointer hover:text-teal-700"
                            onClick={() => handleDelete(s.uuid, 'subclass')}
                          >
                            удалить
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <div className="flex flex-col gap-2">
            {subclasses?.map((s) => (
              <div key={s.uuid}>
                <div className="flex gap-4">
                  <div>{s.uuid}</div>
                  <div>{s.name}</div>
                  <div className="ml-auto">
                    <Button onClick={() => handleDelete(s.uuid, 'subclass')}>
                      удалить
                    </Button>
                  </div>
                </div>

                <div>
                  <Markdown>{s.markdown}</Markdown>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Button onClick={() => setOpenCreateClassModal(true)}>
        Добавить класс
      </Button>

      <Button onClick={() => setOpenCreateSubClassModal(true)}>
        Добавить подкласс
      </Button>

      <Modal
        open={openCreateClassModal}
        onClose={() => setOpenCreateClassModal(false)}
      >
        <Form<CreateClassDto>
          onSubmit={(data) => onSubmit(data, 'class')}
          form={classForm}
        >
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-5 gap-4">
              <FormControls form={classForm} />
            </div>

            <div>
              <Button type="submit">Принять</Button>
            </div>
          </div>
        </Form>
      </Modal>

      <Modal
        open={openCreateSubClassModal}
        onClose={() => setOpenCreateSubClassModal(false)}
      >
        <Form<CreateSubclassDto>
          onSubmit={(data) => onSubmit(data, 'subclass')}
          form={subclassForm}
        >
          <div className="flex flex-col gap-6">
            <div>Добавить подкласс</div>
            <FormControls form={subclassForm} />

            <div>
              <Button type="submit">Принять</Button>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  )
}
