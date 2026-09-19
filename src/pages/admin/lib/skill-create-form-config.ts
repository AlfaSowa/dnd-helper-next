import { CreateSkillDto } from '@/shared/api/Api'
import { FormConfig } from '@/widgets/form'

export const skillCreateFormConfig = (): FormConfig => ({
  id: 'skill-create-form-config',
  controls: [
    {
      id: 'name',
      label: 'Название',
      type: 'text',
      read: (ctx: CreateSkillDto) => ctx?.name || '',
      write: { path: 'name' },
      props: {
        placeholder: 'Напишите название навыка'
      }
    },
    {
      id: 'code',
      label: 'Код навыка',
      type: 'text',
      read: (ctx: CreateSkillDto) => ctx?.code || '',
      write: { path: 'code' },
      props: {
        placeholder: 'Напишите код'
      }
    },
    {
      id: 'description',
      label: 'Описание',
      type: 'text',
      read: (ctx: CreateSkillDto) => ctx?.description || '',
      write: { path: 'description' },
      props: {
        placeholder: 'Напишите описание навыка'
      }
    }
  ]
})
