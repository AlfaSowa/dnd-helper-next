import { CreateRegionDto } from '@/shared/api/Api'
import { FormConfig } from '@/widgets/form'

export const worldRegionsCreateFormConfig = (): FormConfig => ({
  id: 'world-regions-create-form-config',
  controls: [
    {
      id: 'name',
      label: 'Название',
      type: 'text',
      read: (ctx: CreateRegionDto) => ctx?.name || '',
      write: { path: 'name' },
      props: {
        placeholder: 'Напишите название региона'
      }
    },
    {
      id: 'description',
      label: 'описание',
      type: 'textfield',
      read: (ctx: CreateRegionDto) => ctx?.description || '',
      write: { path: 'description' },
      props: {
        placeholder: 'Напишите название подкласса'
      }
    },
    {
      id: 'markdown',
      label: 'Маркдовн описание',
      type: 'markdown',
      read: (ctx: CreateRegionDto) => ctx?.markdown || '',
      write: { path: 'markdown' },
      props: {
        placeholder: 'Описание'
      }
    }
  ]
})
