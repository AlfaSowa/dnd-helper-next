import { baseApi } from '@/app/configure-store'
import { CreateRegionDto, Region } from '@/shared/api/Api'

const apiTags = baseApi.enhanceEndpoints({ addTagTypes: ['Regions'] })

export const api = apiTags.injectEndpoints({
  endpoints: (build) => ({
    getRegions: build.query<Region[], void>({
      query: () => `regions`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ uuid }) => ({ type: 'Regions', uuid }) as const),
              { type: 'Regions', id: 'LIST' }
            ]
          : [{ type: 'Regions', id: 'LIST' }]
    }),
    addRegion: build.mutation<Region, Partial<CreateRegionDto>>({
      query(body) {
        return {
          url: `regions`,
          method: 'POST',
          body
        }
      },
      invalidatesTags: [{ type: 'Regions', id: 'LIST' }]
    }),
    deleteRegion: build.mutation<void, string>({
      query(uuid) {
        return {
          url: `regions/${uuid}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (_result, _error, id) => [
        { type: 'Regions', id },
        { type: 'Regions', id: 'LIST' }
      ]
    })
  })
})

export const {
  useAddRegionMutation,
  useDeleteRegionMutation,
  useGetRegionsQuery
} = api
