import { baseApi } from '@/app/configure-store'
import { CreateSpeciesDto, Species } from '@/shared/api/Api'

const apiTags = baseApi.enhanceEndpoints({ addTagTypes: ['Species'] })

export const api = apiTags.injectEndpoints({
  endpoints: (build) => ({
    getSpecies: build.query<Species[], void>({
      query: () => `species`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ uuid }) => ({ type: 'Species', uuid }) as const),
              { type: 'Species', id: 'LIST' }
            ]
          : [{ type: 'Species', id: 'LIST' }]
    }),
    addSpecies: build.mutation<Species, Partial<CreateSpeciesDto>>({
      query(body) {
        return {
          url: `species`,
          method: 'POST',
          body
        }
      },
      invalidatesTags: [{ type: 'Species', id: 'LIST' }]
    }),
    deleteSpecies: build.mutation<void, string>({
      query(uuid) {
        return {
          url: `species/${uuid}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (_result, _error, id) => [
        { type: 'Species', id },
        { type: 'Species', id: 'LIST' }
      ]
    })
  })
})

export const {
  useAddSpeciesMutation,
  useDeleteSpeciesMutation,
  useGetSpeciesQuery
} = api
