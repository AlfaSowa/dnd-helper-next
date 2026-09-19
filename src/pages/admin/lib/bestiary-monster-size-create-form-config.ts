import { CreateMonsterSizeDto } from '@/shared/api/Api'
import { FormConfig } from '@/widgets/form'

export const bestiaryMonsterSizeCreateFormConfig = (): FormConfig => ({
  id: 'bestiary-monster-size-create-form-config',
  controls: [
    {
      id: 'name',
      label: 'Название',
      type: 'text',
      read: (ctx: CreateMonsterSizeDto) => ctx?.name || '',
      write: { path: 'name' },
      props: {
        placeholder: 'Напишите название размера'
      }
    }
  ]
})
