import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const characterInfoApi = createApi({
  reducerPath: 'characterInfoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character' }


  ),
  endpoints: (builder) => ({


    getAllEpisodesCharacter: builder.query({
      query: (episode ) => {
         return `https://rickandmortyapi.com/api/episode/${episode}`
      },
     
    
    }),

   getCharacterInfo: builder.query({
      query: (id) => `${id}`,
    }),
   
    

  }),
})


export const {useGetCharacterInfoQuery, useGetAllEpisodesCharacterQuery} = characterInfoApi