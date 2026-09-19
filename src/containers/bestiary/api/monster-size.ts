import { baseApi } from '@/app/configure-store'
import { CreateMonsterSizeDto, MonsterSize } from '@/shared/api/Api'

const apiTags = baseApi.enhanceEndpoints({ addTagTypes: ['MonsterSizes'] })

export const api = apiTags.injectEndpoints({
  endpoints: (build) => ({
    getMonsterSizes: build.query<MonsterSize[], void>({
      query: () => `monster-sizes`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(
                ({ uuid }) => ({ type: 'MonsterSizes', uuid }) as const
              ),
              { type: 'MonsterSizes', id: 'LIST' }
            ]
          : [{ type: 'MonsterSizes', id: 'LIST' }]
    }),
    addMonsterSize: build.mutation<MonsterSize, Partial<CreateMonsterSizeDto>>({
      query(body) {
        return {
          url: `monster-sizes`,
          method: 'POST',
          body
        }
      },
      invalidatesTags: [{ type: 'MonsterSizes', id: 'LIST' }]
    }),
    deleteMonsterSize: build.mutation<void, string>({
      query(uuid) {
        return {
          url: `monster-sizes/${uuid}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (_result, _error, id) => [
        { type: 'MonsterSizes', id },
        { type: 'MonsterSizes', id: 'LIST' }
      ]
    })
  })
})

export const {
  useAddMonsterSizeMutation,
  useDeleteMonsterSizeMutation,
  useGetMonsterSizesQuery
} = api
