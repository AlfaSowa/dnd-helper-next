import { CreateAbilityDto } from '@/shared/api/Api'
import { FormConfig } from '@/widgets/form'

export const abilityCreateFormConfig = (): FormConfig => ({
  id: 'ability-create-form-config',
  controls: [
    {
      id: 'name',
      label: 'Название',
      type: 'text',
      read: (ctx: CreateAbilityDto) => ctx?.name || '',
      write: { path: 'name' },
      props: {
        placeholder: 'Напишите название характеристики'
      }
    },
    {
      id: 'code',
      label: 'Код характеристики',
      type: 'text',
      read: (ctx: CreateAbilityDto) => ctx?.code || '',
      write: { path: 'code' },
      props: {
        placeholder: 'Напишите код'
      }
    },
    {
      id: 'description',
      label: 'Описание',
      type: 'text',
      read: (ctx: CreateAbilityDto) => ctx?.description || '',
      write: { path: 'description' },
      props: {
        placeholder: 'Напишите описание характеристики'
      }
    }
  ]
})
