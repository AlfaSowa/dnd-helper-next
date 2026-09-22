import { baseApi } from '@/app/configure-store'
import { Condition, CreateConditionDto } from '@/shared/api/Api'

const apiTags = baseApi.enhanceEndpoints({ addTagTypes: ['Conditions'] })

export const api = apiTags.injectEndpoints({
  endpoints: (build) => ({
    getConditions: build.query<Condition[], void>({
      query: () => `conditions`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(
                ({ uuid }) => ({ type: 'Conditions', uuid }) as const
              ),
              { type: 'Conditions', id: 'LIST' }
            ]
          : [{ type: 'Conditions', id: 'LIST' }]
    }),
    addCondition: build.mutation<Condition, Partial<CreateConditionDto>>({
      query(body) {
        return {
          url: `conditions`,
          method: 'POST',
          body
        }
      },
      invalidatesTags: [{ type: 'Conditions', id: 'LIST' }]
    }),
    deleteCondition: build.mutation<void, string>({
      query(uuid) {
        return {
          url: `conditions/${uuid}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (_result, _error, id) => [
        { type: 'Conditions', id },
        { type: 'Conditions', id: 'LIST' }
      ]
    })
  })
})

export const {
  useAddConditionMutation,
  useDeleteConditionMutation,
  useGetConditionsQuery
} = api
