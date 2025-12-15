/* eslint-disable @typescript-eslint/no-explicit-any */
export type FormState = {
  values: Record<string, any>
  errors: Record<string, string | null>
  touched: Record<string, boolean>
  submitCount: number
  isSubmitting: boolean
}

export type FormAction =
  | { type: 'fieldChanged'; id: string; value: any }
  | { type: 'fieldBlurred'; id: string }
  | { type: 'setErrors'; errors: Record<string, string | null> }
  | { type: 'submitting'; value: boolean }
  | { type: 'incrementSubmit' }
  | { type: 'reset'; next?: Partial<FormState> }

export const initialState: FormState = {
  values: {},
  errors: {},
  touched: {},
  submitCount: 0,
  isSubmitting: false
}

export function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'fieldChanged':
      return {
        ...state,
        values: { ...state.values, [action.id]: action.value }
      }
    case 'fieldBlurred':
      return { ...state, touched: { ...state.touched, [action.id]: true } }
    case 'setErrors':
      return { ...state, errors: action.errors }
    case 'submitting':
      return { ...state, isSubmitting: action.value }
    case 'incrementSubmit':
      return { ...state, submitCount: state.submitCount + 1 }
    case 'reset':
      return { ...initialState, ...action.next }
    default:
      return state
  }
}
