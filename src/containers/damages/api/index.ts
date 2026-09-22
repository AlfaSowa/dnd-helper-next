import { baseApi } from '@/app/configure-store'
import { CreateDamageDto, Damage } from '@/shared/api/Api'

const apiTags = baseApi.enhanceEndpoints({ addTagTypes: ['Damages'] })

export const api = apiTags.injectEndpoints({
  endpoints: (build) => ({
    getDamages: build.query<Damage[], void>({
      query: () => `damages`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ uuid }) => ({ type: 'Damages', uuid }) as const),
              { type: 'Damages', id: 'LIST' }
            ]
          : [{ type: 'Damages', id: 'LIST' }]
    }),
    addDamage: build.mutation<Damage, Partial<CreateDamageDto>>({
      query(body) {
        return {
          url: `damages`,
          method: 'POST',
          body
        }
      },
      invalidatesTags: [{ type: 'Damages', id: 'LIST' }]
    }),
    deleteDamage: build.mutation<void, string>({
      query(uuid) {
        return {
          url: `damages/${uuid}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (_result, _error, id) => [
        { type: 'Damages', id },
        { type: 'Damages', id: 'LIST' }
      ]
    })
  })
})

export const {
  useAddDamageMutation,
  useDeleteDamageMutation,
  useGetDamagesQuery
} = api
