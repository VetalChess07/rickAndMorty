import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const episodesApi = createApi({
  reducerPath: 'episodesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/episode' }),
  endpoints: (builder) => ({
   getEpisodes: builder.query({
      
      query: (page) => `?page=${page}`,
     
    }),
  }),
})


export const {useGetEpisodesQuery} = episodesApi