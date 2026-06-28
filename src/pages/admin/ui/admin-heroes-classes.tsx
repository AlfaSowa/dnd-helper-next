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
import { Button, Section } from '@/shared/ui'
import { Form, FormControls } from '@/widgets/form'
import { useForm } from '@/widgets/form/hooks'
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

  const handleDelete = (uuid: string, type: 'class' | 'subclass') => {
    if (type === 'class') {
      deleteClass(uuid)
    }
    if (type === 'subclass') {
      deleteSubclass(uuid)
    }
  }

  const classForm = useForm<object>({
    config: heroesClassCreateFormConfig()
  })
  const subclassForm = useForm<object>({
    config: heroesSubclassCreateFormConfig()
  })

  const onSubmit = (data: object, type: 'class' | 'subclass') => {
    if (type === 'class') {
      addClass(data)
    }
    if (type === 'subclass') {
      addSubclass(data)
    }
  }

  return (
    <>
      <div className="flex flex-col gap-6">
        <Section>
          <div>
            <Button>добавить класс</Button>
          </div>

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
          <div>
            <Button>добавить подкласс</Button>
          </div>

          <div className="flex flex-col gap-2">
            {subclasses?.map((s) => (
              <div className="flex gap-4" key={s.uuid}>
                <div>{s.uuid}</div>
                <div>{s.name}</div>
                <div className="ml-auto">
                  <Button onClick={() => handleDelete(s.uuid, 'subclass')}>
                    удалить
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Form onSubmit={(data) => onSubmit(data, 'class')} form={classForm}>
        <div className="flex flex-col gap-6">
          <div>Добавить класс</div>
          <div className="grid grid-cols-5 gap-4">
            <FormControls form={classForm} />
          </div>

          <div>
            <Button type="submit">Принять</Button>
          </div>
        </div>
      </Form>

      <Form onSubmit={(data) => onSubmit(data, 'subclass')} form={subclassForm}>
        <div className="flex flex-col gap-6">
          <div>Добавить подкласс</div>
          <div className="grid grid-cols-5 gap-4">
            <FormControls form={subclassForm} />
          </div>

          <div>
            <Button type="submit">Принять</Button>
          </div>
        </div>
      </Form>
    </>
  )
}
