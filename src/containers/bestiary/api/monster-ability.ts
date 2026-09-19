import { baseApi } from '@/app/configure-store'
import { CreateMonsterAbilityDto, MonsterType } from '@/shared/api/Api'

const apiTags = baseApi.enhanceEndpoints({ addTagTypes: ['MonsterAbilities'] })

export const api = apiTags.injectEndpoints({
  endpoints: (build) => ({
    getMonsterAbilities: build.query<MonsterType[], void>({
      query: () => `monster-types`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(
                ({ uuid }) => ({ type: 'MonsterAbilities', uuid }) as const
              ),
              { type: 'MonsterAbilities', id: 'LIST' }
            ]
          : [{ type: 'MonsterAbilities', id: 'LIST' }]
    }),
    addMonsterType: build.mutation<
      MonsterType,
      Partial<CreateMonsterAbilityDto>
    >({
      query(body) {
        return {
          url: `monster-types`,
          method: 'POST',
          body
        }
      },
      invalidatesTags: [{ type: 'MonsterAbilities', id: 'LIST' }]
    }),
    deleteMonsterType: build.mutation<void, string>({
      query(uuid) {
        return {
          url: `monster-types/${uuid}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (_result, _error, id) => [
        { type: 'MonsterAbilities', id },
        { type: 'MonsterAbilities', id: 'LIST' }
      ]
    })
  })
})

export const {} = api
