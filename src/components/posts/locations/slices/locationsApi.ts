import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const locationsApi = createApi({
  reducerPath: 'locationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/location' }),
  endpoints: (builder) => ({
   getLocations: builder.query({
      
      query: (page) => `?page=${page}`,
     
    }),
  }),
})


export const {useGetLocationsQuery} = locationsApi