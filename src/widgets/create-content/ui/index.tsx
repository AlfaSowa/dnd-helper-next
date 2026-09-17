import { Button, Modal, Section } from '@/shared/ui'
import { Form, FormConfig, FormControls } from '@/widgets/form'
import { useForm } from '@/widgets/form/hooks'
import { useState } from 'react'

type ElementsCoreType = {
  uuid: string
  name: string
}
type CreateContentProps<T, E extends ElementsCoreType> = {
  onSubmit: (data: T) => void
  handleDelete: (uuid: string) => void
  formConfig: FormConfig
  buttonTxt: string
  elements: E[] | undefined
  elementsTitle: string
}

export function CreateContent<T, E extends ElementsCoreType>({
  onSubmit,
  handleDelete,
  formConfig,
  buttonTxt,
  elements,
  elementsTitle
}: CreateContentProps<T, E>) {
  const [open, setOpen] = useState(false)

  const classForm = useForm<T>({
    config: formConfig
  })

  return (
    <>
      <Section>
        <div>{elementsTitle}</div>

        <div className="flex flex-col gap-2">
          {elements?.map((i) => (
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

      <Button onClick={() => setOpen(true)}>{buttonTxt}</Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Form<T> onSubmit={(data) => onSubmit(data)} form={classForm}>
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
    </>
  )
}
