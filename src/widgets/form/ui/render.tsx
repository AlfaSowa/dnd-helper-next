import { Select } from '@/shared/ui'
import { Input } from '@/shared/ui/input'
import { ReactNode } from 'react'

type FxType = {
  onChange?: (v: string | number | boolean) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
}

export type FormControlsRenderType = {
  text: (props: FxType) => ReactNode
  number: (props: FxType) => ReactNode
  checkbox: (props: FxType) => ReactNode
  select: (props: FxType) => ReactNode
}

export const FormControlsRender: FormControlsRenderType = {
  text: ({ onChange, value }) => (
    <Input
      type="text"
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
  select: ({ onChange, value }) => (
    <Select
      value={value}
      onChange={(v) => onChange?.(v.value)}
      options={[
        { name: '1111', value: '1' },
        { name: '2222', value: '2' },
        { name: '3333', value: '3' },
        { name: '444', value: '4' }
      ]}
    />
  )
}
