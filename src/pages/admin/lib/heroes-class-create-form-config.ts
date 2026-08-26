import { type FormConfig } from '@/widgets/form'

interface HeroesClassCreateType {
  name: string
  subclassesIds: string
}

export const heroesClassCreateFormConfig = (): FormConfig => ({
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
      label: 'Ид подкласса',
      type: 'multyselect',
      read: (ctx: HeroesClassCreateType) => ctx?.subclassesIds || '',
      write: { path: 'subclassesIds' },
      props: {
        placeholder: 'Напишите название подкласса'
      }
    }
  ]
})
