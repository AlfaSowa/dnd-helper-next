import { baseApi } from '@app/api';
import { CreateHeroDto, Hero } from '@shared/api/data-contracts';

const apiTags = baseApi.enhanceEndpoints({ addTagTypes: ['Heroes'] });

export const api = apiTags.injectEndpoints({
  endpoints: (build) => ({
    getHeroes: build.query<Hero[], string>({
      query: (roomId) => `heroes/all/${roomId}`,
      providesTags: ['Heroes'],
    }),
    createHero: build.mutation<Hero[], CreateHeroDto>({
      query: (body) => ({
        url: `heroes`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Heroes'],
    }),
  }),
});

export const { useGetHeroesQuery, useCreateHeroMutation } = api;
