import { configureStore } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`
  }),
  endpoints: () => ({})
})

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer
  },

  middleware: (gDM) => gDM().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
