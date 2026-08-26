import { Select, Textfield } from '@/shared/ui'
import { Input } from '@/shared/ui/input'
import { ReactNode } from 'react'
import { OptionItem } from '../model'

type FxType = {
  onChange?: (v: string | number | boolean | string[]) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
  options: OptionItem[]
}

export type FormControlsRenderType = {
  text: (props: FxType) => ReactNode
  textfield: (props: FxType) => ReactNode
  number: (props: FxType) => ReactNode
  checkbox: (props: FxType) => ReactNode
  select: (props: FxType) => ReactNode
  multyselect: (props: FxType) => ReactNode
}

export const FormControlsRender: FormControlsRenderType = {
  text: ({ onChange, value }) => (
    <Input
      type="text"
      value={value ?? ''}
      onChange={(e) => onChange?.(e.target.value)}
    />
  ),
  textfield: ({ onChange, value }) => (
    <Textfield
      value={value ?? ''}
      onChange={(e) => onChange?.(e.target.value)}
    />
  ),
  number: ({ onChange, value }) => (
    <Input
      type="number"
      value={value ?? ''}
      onChange={(e) => onChange?.(e.target.value)}
    />
  ),
  checkbox: () => (
    <div>
      <div>checkbox</div>
    </div>
  ),
  select: ({ onChange, value, options }) => (
    <Select
      value={value}
      onChange={(v) => onChange?.(v.value)}
      options={options}
    />
  ),
  multyselect: ({ onChange, value }) => (
    <Input
      type="text"
      value={value ?? ''}
      onChange={(e) => onChange?.([e.target.value])}
    />
  )
}
