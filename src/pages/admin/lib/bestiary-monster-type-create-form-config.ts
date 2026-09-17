import { CreateMonsterTypeDto } from '@/shared/api/Api'
import { FormConfig } from '@/widgets/form'

export const bestiaryMonsterTypeCreateFormConfig = (): FormConfig => ({
  id: 'bestiary-monster-type-create-form-config',
  controls: [
    {
      id: 'name',
      label: 'Название',
      type: 'text',
      read: (ctx: CreateMonsterTypeDto) => ctx?.name || '',
      write: { path: 'name' },
      props: {
        placeholder: 'Напишите название типа'
      }
    }
  ]
})
