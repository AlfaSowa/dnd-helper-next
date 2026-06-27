import { baseApi } from '@/app/configure-store'

const apiTags = baseApi.enhanceEndpoints({ addTagTypes: ['Classes'] })

export const api = apiTags.injectEndpoints({
  endpoints: (build) => ({
    getClasses: build.query<string, void>({
      query: () => `classes`,
      providesTags: ['Classes']
    })
  })
})

export const { useGetClassesQuery } = api
