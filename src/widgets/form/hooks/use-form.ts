import { useCallback, useReducer } from 'react'
import { FormConfig } from '../model'
import { formReducer, FormState, initialState } from '../model/reducer'

type OnChangeFormType = (id: string, value: string | number | boolean) => void

interface UseFormProps<T> {
  config: FormConfig
  defaultData?: T
}

export type UseFormReturn<T = object> = {
  config: FormConfig
  defaultData?: T
  onChange?: (id: string, value: string | number | boolean) => void
  state: FormState
  submit: (handler: (data: T) => void) => Promise<void>
}

export const useForm = <T>({
  config,
  defaultData
}: UseFormProps<T>): UseFormReturn<T> => {
  const [state, dispatch] = useReducer(formReducer, initialState)

  const onChange: OnChangeFormType = useCallback((id, value) => {
    dispatch({ type: 'fieldChanged', id, value })
  }, [])

  const submit = useCallback(
    async (handler: (data: T) => void) => {
      dispatch({ type: 'incrementSubmit' })

      const finalModel = state.values as T

      await handler(finalModel)
      try {
        dispatch({ type: 'submitting', value: true })
      } finally {
        dispatch({ type: 'submitting', value: false })
      }
    },
    [state.values]
  )

  return { config, defaultData, onChange, state, submit }
}
