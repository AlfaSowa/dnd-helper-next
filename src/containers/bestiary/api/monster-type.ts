import { baseApi } from '@/app/configure-store'
import { CreateMonsterTypeDto, MonsterType } from '@/shared/api/Api'

const apiTags = baseApi.enhanceEndpoints({ addTagTypes: ['MonsterTypes'] })

export const api = apiTags.injectEndpoints({
  endpoints: (build) => ({
    getMonsterTypes: build.query<MonsterType[], void>({
      query: () => `monster-types`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(
                ({ uuid }) => ({ type: 'MonsterTypes', uuid }) as const
              ),
              { type: 'MonsterTypes', id: 'LIST' }
            ]
          : [{ type: 'MonsterTypes', id: 'LIST' }]
    }),
    addMonsterType: build.mutation<MonsterType, Partial<CreateMonsterTypeDto>>({
      query(body) {
        return {
          url: `monster-types`,
          method: 'POST',
          body
        }
      },
      invalidatesTags: [{ type: 'MonsterTypes', id: 'LIST' }]
    }),
    deleteMonsterType: build.mutation<void, string>({
      query(uuid) {
        return {
          url: `monster-types/${uuid}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (_result, _error, id) => [
        { type: 'MonsterTypes', id },
        { type: 'MonsterTypes', id: 'LIST' }
      ]
    })
  })
})

export const {
  useAddMonsterTypeMutation,
  useDeleteMonsterTypeMutation,
  useGetMonsterTypesQuery
} = api
