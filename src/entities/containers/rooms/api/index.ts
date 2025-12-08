import { baseApi } from '@app/api';
import { Room } from '@shared/api/data-contracts';

const apiTags = baseApi.enhanceEndpoints({ addTagTypes: ['Rooms'] });

export const api = apiTags.injectEndpoints({
  endpoints: (build) => ({
    getRooms: build.query<Room[], void>({
      query: () => `rooms`,
      providesTags: ['Rooms'],
    }),
  }),
});

export const { useGetRoomsQuery } = api;
