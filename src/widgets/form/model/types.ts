/* eslint-disable @typescript-eslint/no-explicit-any */
export type BuiltinTypes = 'text' | 'number' | 'select' | 'checkbox'

export type ValueReader<TCtx> = (ctx: TCtx) => string | number | boolean

export type ValueWriter<TCtx> =
  | { path: string; transform?: (v: any, ctx: TCtx) => any }
  | ((next: any, ctx: TCtx) => TCtx)

export type OptionItem = Record<string, any>
export type OptionsSource<TCtx = any> =
  | OptionItem[]
  | ((ctx: TCtx) => Promise<OptionItem[]> | OptionItem[])

export type FieldConfig<TCtx = any> = {
  id: string
  label?: string
  type: BuiltinTypes
  read: ValueReader<TCtx>
  write?: ValueWriter<TCtx>
  options?: {
    source: OptionsSource<TCtx>
  }
  props?: Record<string, any>
}

export type FormConfig<TCtx = any> = {
  id: string
  controls: FieldConfig<TCtx>[]
}
