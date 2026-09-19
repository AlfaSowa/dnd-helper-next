import { baseApi } from '@/app/configure-store'
import { Ability, CreateAbilityDto } from '@/shared/api/Api'

const apiTags = baseApi.enhanceEndpoints({ addTagTypes: ['Abilities'] })

export const api = apiTags.injectEndpoints({
  endpoints: (build) => ({
    getAbilities: build.query<Ability[], void>({
      query: () => `abilities`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(
                ({ uuid }) => ({ type: 'Abilities', uuid }) as const
              ),
              { type: 'Abilities', id: 'LIST' }
            ]
          : [{ type: 'Abilities', id: 'LIST' }]
    }),
    addAbility: build.mutation<Ability, Partial<CreateAbilityDto>>({
      query(body) {
        return {
          url: `abilities`,
          method: 'POST',
          body
        }
      },
      invalidatesTags: [{ type: 'Abilities', id: 'LIST' }]
    }),
    deleteAbility: build.mutation<void, string>({
      query(uuid) {
        return {
          url: `abilities/${uuid}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (_result, _error, id) => [
        { type: 'Abilities', id },
        { type: 'Abilities', id: 'LIST' }
      ]
    })
  })
})

export const {
  useAddAbilityMutation,
  useDeleteAbilityMutation,
  useGetAbilitiesQuery
} = api
