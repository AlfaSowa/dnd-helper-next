import { baseApi } from '@/app/configure-store'
import { CreateSkillDto, Skill } from '@/shared/api/Api'

const apiTags = baseApi.enhanceEndpoints({ addTagTypes: ['Skills'] })

export const api = apiTags.injectEndpoints({
  endpoints: (build) => ({
    getSkills: build.query<Skill[], void>({
      query: () => `skills`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ uuid }) => ({ type: 'Skills', uuid }) as const),
              { type: 'Skills', id: 'LIST' }
            ]
          : [{ type: 'Skills', id: 'LIST' }]
    }),
    addSkill: build.mutation<Skill, Partial<CreateSkillDto>>({
      query(body) {
        return {
          url: `skills`,
          method: 'POST',
          body
        }
      },
      invalidatesTags: [{ type: 'Skills', id: 'LIST' }]
    }),
    deleteSkill: build.mutation<void, string>({
      query(uuid) {
        return {
          url: `skills/${uuid}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (_result, _error, id) => [
        { type: 'Skills', id },
        { type: 'Skills', id: 'LIST' }
      ]
    })
  })
})

export const {
  useAddSkillMutation,
  useDeleteSkillMutation,
  useGetSkillsQuery
} = api
