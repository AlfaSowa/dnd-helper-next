import { CreateSpeciesDto } from '@/shared/api/Api'
import { FormConfig } from '@/widgets/form'

export const heroesSpeciesCreateFormConfig = (): FormConfig => ({
  id: 'heroes-species-create-form-config',
  controls: [
    {
      id: 'name',
      label: 'Название',
      type: 'text',
      read: (ctx: CreateSpeciesDto) => ctx?.name || '',
      write: { path: 'name' },
      props: {
        placeholder: 'Напишите название вида'
      }
    },
    {
      id: 'description',
      label: 'описание',
      type: 'textfield',
      read: (ctx: CreateSpeciesDto) => ctx?.description || '',
      write: { path: 'description' },
      props: {
        placeholder: 'Напишите описание вида'
      }
    },
    {
      id: 'markdown',
      label: 'Маркдовн описание',
      type: 'markdown',
      read: (ctx: CreateSpeciesDto) => ctx?.markdown || '',
      write: { path: 'markdown' },
      props: {
        placeholder: 'Описание'
      }
    }
  ]
})
