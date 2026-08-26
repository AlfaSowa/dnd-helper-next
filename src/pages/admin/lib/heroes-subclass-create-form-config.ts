import { type FormConfig } from '@/widgets/form'

interface HeroesSubclassCreateType {
  name: string
  markdown: string
  description: string
}

export const heroesSubclassCreateFormConfig = (): FormConfig => ({
  id: 'heroes-subclass-create-form-config',
  controls: [
    {
      id: 'name',
      label: 'Название',
      type: 'text',
      read: (ctx: HeroesSubclassCreateType) => ctx?.name || '',
      write: { path: 'name' },
      props: {
        placeholder: 'Напишите название подкласса'
      }
    },
    {
      id: 'description',
      label: 'Описание',
      type: 'text',
      read: (ctx: HeroesSubclassCreateType) => ctx?.description || '',
      write: { path: 'description' },
      props: {
        placeholder: 'Напишите название класса'
      }
    },
    {
      id: 'markdown',
      label: 'Маркдовн описание',
      type: 'markdown',
      read: (ctx: HeroesSubclassCreateType) => ctx?.markdown || '',
      write: { path: 'markdown' },
      props: {
        placeholder: 'Описание'
      }
    }
  ]
})
