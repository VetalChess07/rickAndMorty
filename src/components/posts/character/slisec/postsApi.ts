
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
   GetPosts: builder.query({
      
      query: (page) => `character?page=${page}`,
     
    }),
  }),
})


export const {useGetPostsQuery} = postsApi