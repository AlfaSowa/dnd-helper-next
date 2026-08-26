'use client'

import { useAddRegionMutation } from '@/containers/regions'
import { CreateRegionDto } from '@/shared/api/Api'
import { Button, Modal } from '@/shared/ui'
import { Form, FormControls } from '@/widgets/form'
import { useForm } from '@/widgets/form/hooks'
import { useState } from 'react'
import { worldRegionsCreateFormConfig } from '../lib'

export const AdminWorldRegions = () => {
  const [open, setOpen] = useState(false)

  // const { data } = useGetRegionsQuery()
  const [addRegion] = useAddRegionMutation()

  const form = useForm<CreateRegionDto>({
    config: worldRegionsCreateFormConfig()
  })

  const onSubmit = (data: CreateRegionDto) => {
    addRegion(data)
  }

  return (
    <div>
      <div className="flex gap-2">
        <Button onClick={() => setOpen(true)}>Добавить регион</Button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Form<CreateRegionDto> onSubmit={(data) => onSubmit(data)} form={form}>
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
