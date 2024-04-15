
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
   getPosts: builder.query({
      
      query: (page) => `character?page=${page}`,
     
    }),
  }),
})


export const {useGetPostsQuery} = charactersApi