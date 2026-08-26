import { baseApi } from '@/app/configure-store'
import { Class, CreateClassDto } from '@/shared/api/Api'

const apiTags = baseApi.enhanceEndpoints({ addTagTypes: ['Classes'] })

export const api = apiTags.injectEndpoints({
  endpoints: (build) => ({
    getClasses: build.query<Class[], void>({
      query: () => `classes`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ uuid }) => ({ type: 'Classes', uuid }) as const),
              { type: 'Classes', id: 'LIST' }
            ]
          : [{ type: 'Classes', id: 'LIST' }]
    }),
    addClass: build.mutation<Class, Partial<CreateClassDto>>({
      query(body) {
        return {
          url: `classes`,
          method: 'POST',
          body
        }
      },
      invalidatesTags: [{ type: 'Classes', id: 'LIST' }]
    }),
    deleteClass: build.mutation<void, string>({
      query(uuid) {
        return {
          url: `classes/${uuid}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (_result, _error, id) => [
        { type: 'Classes', id },
        { type: 'Classes', id: 'LIST' }
      ]
    })
  })
})

export const {
  useGetClassesQuery,
  useDeleteClassMutation,
  useAddClassMutation
} = api
