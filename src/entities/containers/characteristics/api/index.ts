import { baseApi } from '@app/api';
import { Characteristic } from '@shared/api/data-contracts';

const apiTags = baseApi.enhanceEndpoints({ addTagTypes: ['Characteristics'] });

export const api = apiTags.injectEndpoints({
  endpoints: (build) => ({
    getCharacteristics: build.query<Characteristic[], void>({
      query: () => `characteristics`,
      providesTags: ['Characteristics'],
    }),
  }),
});

export const { useGetCharacteristicsQuery } = api;
