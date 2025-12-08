import { baseApi } from '@app/api';
import { Character } from '@shared/api/data-contracts';

const apiTags = baseApi.enhanceEndpoints({ addTagTypes: ['Characters'] });

export const api = apiTags.injectEndpoints({
  endpoints: (build) => ({
    getCharacters: build.query<Character[], void>({
      query: () => `characters`,
      providesTags: ['Characters'],
    }),
  }),
});

export const { useGetCharactersQuery } = api;
