import { baseApi } from '@app/api';
import { Class } from '@shared/api/data-contracts';

const apiTags = baseApi.enhanceEndpoints({ addTagTypes: ['Classes'] });

export const api = apiTags.injectEndpoints({
  endpoints: (build) => ({
    getClasses: build.query<Class[], void>({
      query: () => `classes`,
      providesTags: ['Classes'],
    }),
    // createClass: build.mutation<Class[], CreateClassDto>({
    //   query: (body) => ({
    //     url: `classes`,
    //     method: 'POST',
    //     body: body,
    //   }),
    //   invalidatesTags: ['Classes'],
    // }),
  }),
});

export const { useGetClassesQuery } = api;
