import { OptionItem, type FormConfig } from '@/widgets/form'

interface HeroesClassCreateType {
  name: string
  subclassesIds: string[]
}

export const heroesClassCreateFormConfig = (
  subclassesOptions: OptionItem[]
): FormConfig => ({
  id: 'heroes-class-create-form-config',
  controls: [
    {
      id: 'name',
      label: 'Название',
      type: 'text',
      read: (ctx: HeroesClassCreateType) => ctx?.name || '',
      write: { path: 'name' },
      props: {
        placeholder: 'Напишите название класса'
      }
    },
    {
      id: 'subclassesIds',
      label: 'Подклассы',
      type: 'select',
      read: (ctx: HeroesClassCreateType) => ctx?.subclassesIds || '',
      write: { path: 'subclassesIds' },
      props: {
        placeholder: 'Добавь подклассы'
      },
      options: {
        source: subclassesOptions
      }
    }
  ]
})
