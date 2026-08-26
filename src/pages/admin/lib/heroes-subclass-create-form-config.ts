import { type FormConfig } from '@/widgets/form'

interface HeroesSubclassCreateType {
  name: string
  markdown: string
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
      id: 'markdown',
      label: 'Маркдовн описание',
      type: 'textfield',
      read: (ctx: HeroesSubclassCreateType) => ctx?.markdown || '',
      write: { path: 'markdown' },
      props: {
        placeholder: 'Описание'
      }
    }
  ]
})
