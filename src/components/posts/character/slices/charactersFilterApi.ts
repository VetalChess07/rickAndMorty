import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const charactersFilterApi = createApi({
   reducerPath: 'postsFilter',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character' }),
   endpoints: (builder) => ({
      getPostsFilter: builder.query({
       
      query: (obj) =>{
        const status = obj.status && obj.status != 'null' ? `status=${obj.status}&` : ''
        const species = obj.species && obj.species != 'null' ?`species=${obj.species}&` : ''
        const gender = obj.gender && obj.gender != 'null' ?`gender=${obj.gender}&` : ''
      // return `?species=${species}&status=${status}&gender=${gender}`
        return `?${species}${status}${gender}`
      },
   
     }),
   }),
 })
 
 
 export const {useGetPostsFilterQuery} = charactersFilterApi