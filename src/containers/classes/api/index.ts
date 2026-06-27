import { baseApi } from '@/app/configure-store'
import { Class } from '@/shared/api/Api'

const apiTags = baseApi.enhanceEndpoints({ addTagTypes: ['Classes'] })

export const api = apiTags.injectEndpoints({
  endpoints: (build) => ({
    getClasses: build.query<Class[], void>({
      query: () => `classes`,
      providesTags: ['Classes']
    })
  })
})

export const { useGetClassesQuery } = api
