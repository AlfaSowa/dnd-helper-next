import { CreateDamageDto } from '@/shared/api/Api'
import { FormConfig } from '@/widgets/form'

export const damageCreateFormConfig = (): FormConfig => ({
  id: 'damage-create-form-config',
  controls: [
    {
      id: 'name',
      label: 'Название',
      type: 'text',
      read: (ctx: CreateDamageDto) => ctx?.name || '',
      write: { path: 'name' },
      props: {
        placeholder: 'Напишите название типа урона'
      }
    }
  ]
})
