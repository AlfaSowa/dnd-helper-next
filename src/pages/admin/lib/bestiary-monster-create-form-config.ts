import { CreateMonsterDto } from '@/shared/api/Api'
import { FormConfig, OptionItem } from '@/widgets/form'

type BestiaryMonsterCreateFormConfigProps = {
  monsterTypesOptions: OptionItem[]
}

export const bestiaryMonsterCreateFormConfig = ({
  monsterTypesOptions
}: BestiaryMonsterCreateFormConfigProps): FormConfig => ({
  id: 'bestiary-monster-create-form-config',
  controls: [
    {
      id: 'name',
      label: 'Название',
      type: 'text',
      read: (ctx: CreateMonsterDto) => ctx?.name || '',
      write: { path: 'name' },
      props: {
        placeholder: 'Напишите название монстра'
      }
    },
    {
      id: 'typeId',
      label: 'Тип монстра',
      type: 'select',
      read: (ctx: CreateMonsterDto) => ctx?.typeId || '',
      write: { path: 'typeId' },
      props: {
        placeholder: 'Выберите тип монстра'
      },
      options: {
        source: monsterTypesOptions
      }
    }
  ]
})
