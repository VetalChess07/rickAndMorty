import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const postsFilter = createApi({
   reducerPath: 'postsFilter',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character' }),
   endpoints: (builder) => ({
      getPostsFilter: builder.query({
       
       query: (obj) =>{
          console.log(obj )
      return `?species=${obj.species}&status=${obj.status}&gender=${obj.gender}`
      
      }
      
     }),
   }),
 })
 
 
 export const {useGetPostsFilterQuery} = postsFilter