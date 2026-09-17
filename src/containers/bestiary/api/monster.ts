import { baseApi } from '@/app/configure-store'
import { CreateMonsterDto, Monster } from '@/shared/api/Api'

const apiTags = baseApi.enhanceEndpoints({ addTagTypes: ['Bestiary'] })

export const api = apiTags.injectEndpoints({
  endpoints: (build) => ({
    getBestiary: build.query<Monster[], void>({
      query: () => `bestiary`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(
                ({ uuid }) => ({ type: 'Bestiary', uuid }) as const
              ),
              { type: 'Bestiary', id: 'LIST' }
            ]
          : [{ type: 'Bestiary', id: 'LIST' }]
    }),
    addMonster: build.mutation<Monster, Partial<CreateMonsterDto>>({
      query(body) {
        return {
          url: `bestiary`,
          method: 'POST',
          body
        }
      },
      invalidatesTags: [{ type: 'Bestiary', id: 'LIST' }]
    }),
    deleteMonster: build.mutation<void, string>({
      query(uuid) {
        return {
          url: `bestiary/${uuid}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (_result, _error, id) => [
        { type: 'Bestiary', id },
        { type: 'Bestiary', id: 'LIST' }
      ]
    })
  })
})

export const {
  useAddMonsterMutation,
  useDeleteMonsterMutation,
  useGetBestiaryQuery
} = api
