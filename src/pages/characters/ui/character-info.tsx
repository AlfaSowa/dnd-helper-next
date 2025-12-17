'use client'

import { Field, Section } from '@/shared/ui'

export const CharacterInfo = () => {
  return (
    <Section title="Основная информация">
      <div className="grid grid-cols-5 gap-6">
        <Field label="Имя" value="Владислав" />
        <Field label="Предыстория" value="Дворянин" />
        <Field label="Раса" value="Дварф" />
        <Field label="Класс" value="Паладин" />
        <Field label="Подкласс" value="Клятва преданности" />
      </div>
    </Section>
  )
}
