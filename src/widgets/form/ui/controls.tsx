import { Fragment } from 'react/jsx-runtime'
import { UseFormReturn } from '../hooks'
import { FieldConfig } from '../model'
import { FormControlsRender } from './render'

interface FormControlsProps<T> {
  form: UseFormReturn<T>
}

interface FieldProps<T> {
  form: UseFormReturn<T>
  control: FieldConfig
}

export function FormControls<T = object>({ form }: FormControlsProps<T>) {
  const { controls } = form.config
  return (
    <>
      {controls.map((control) => (
        <Fragment key={control.id}>
          <Field<T> form={form} control={control} />
        </Fragment>
      ))}
    </>
  )
}

function Field<T>({ form, control }: FieldProps<T>) {
  const { onChange, defaultData, state } = form

  const Render = FormControlsRender[control.type]

  const value = state.values[control.id] || control.read(defaultData)

  return (
    <label className="flex flex-col gap-1 text-sm">
      {control.label && <span>{control.label}</span>}

      <Render onChange={(v) => onChange?.(control.id, v)} value={value} />
    </label>
  )
}
