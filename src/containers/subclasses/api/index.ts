import { baseApi } from '@/app/configure-store'
import { CreateSubclassDto, Subclass } from '@/shared/api/Api'

const apiTags = baseApi.enhanceEndpoints({ addTagTypes: ['Subclasses'] })

export const api = apiTags.injectEndpoints({
  endpoints: (build) => ({
    getSubclasses: build.query<Subclass[], void>({
      query: () => `subclasses`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(
                ({ uuid }) => ({ type: 'Subclasses', uuid }) as const
              ),
              { type: 'Subclasses', id: 'LIST' }
            ]
          : [{ type: 'Subclasses', id: 'LIST' }]
    }),
    addSubclass: build.mutation<Subclass, Partial<CreateSubclassDto>>({
      query(body) {
        return {
          url: `subclasses`,
          method: 'POST',
          body
        }
      },
      invalidatesTags: [{ type: 'Subclasses', id: 'LIST' }]
    }),
    deleteSubclass: build.mutation<void, string>({
      query(uuid) {
        return {
          url: `subclasses/${uuid}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (_result, _error, id) => [
        { type: 'Subclasses', id },
        { type: 'Subclasses', id: 'LIST' }
      ]
    })
  })
})

export const {
  useGetSubclassesQuery,
  useDeleteSubclassMutation,
  useAddSubclassMutation
} = api
