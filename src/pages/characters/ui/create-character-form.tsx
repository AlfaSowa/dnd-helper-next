'use client'

import { Button } from '@/shared/ui'
import { Form, FormControls } from '@/widgets/form'
import { useForm } from '@/widgets/form/hooks/use-form'
import { characterCreateFormConfig } from '../lib'

export const CreateCharacterForm = () => {
  const form = useForm<object>({
    config: characterCreateFormConfig()
  })

  const onSubmit = (data: object) => {
    console.log('onSubmit', data)
  }

  return (
    <Form onSubmit={onSubmit} form={form}>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-5 gap-4">
          <FormControls form={form} />
        </div>

        <div>
          <Button type="submit">Принять</Button>
        </div>
      </div>
    </Form>
  )
}
