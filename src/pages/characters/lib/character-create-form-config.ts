import { type FormConfig } from '@/widgets/form'

interface characterCreateType {
  name: string
  race: string
  class: string
  subclass: string
  background: string
}

export const characterCreateFormConfig = (): FormConfig => ({
  id: 'character-create-form',
  controls: [
    {
      id: 'name',
      label: 'Имя',
      type: 'text',
      read: (ctx: characterCreateType) => ctx?.name || '',
      write: { path: 'name' },
      props: {
        placeholder: 'Напишите имя'
      }
    },
    {
      id: 'background',
      label: 'Предыстория',
      type: 'select',
      read: (ctx: characterCreateType) => ctx?.background || '',
      write: { path: 'background' },
      props: {
        placeholder: 'выберите предысторию'
      }
    },
    {
      id: 'race',
      label: 'Раса',
      type: 'select',
      read: (ctx: characterCreateType) => ctx?.race || '',
      write: { path: 'race' },
      props: {
        placeholder: 'Выберите расу'
      }
    },
    {
      id: 'class',
      label: 'Класс',
      type: 'select',
      read: (ctx: characterCreateType) => ctx?.class || '',
      write: { path: 'class' },
      props: {
        placeholder: 'Выберите класс'
      }
    },
    {
      id: 'subclass',
      label: 'Подкласс',
      type: 'select',
      read: (ctx: characterCreateType) => ctx?.subclass || '',
      write: { path: 'subclass' },
      props: {
        placeholder: 'Выберите подкласс'
      }
    }
  ]
})
