import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const episodeInfoApi = createApi({
  reducerPath: 'episodeInfoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/episode' }


  ),
  endpoints: (builder) => ({


    getAllCharactersEpisode: builder.query({
      query: (characters ) => {
        const res = `https://rickandmortyapi.com/api/character/${characters}`
        console.log(res) 
        return res 
      },
     
    
    }),

   getEpisodeInfo: builder.query({
      query: (id) => `${id}`,
    }),
   
    

  }),
})


export const {useGetEpisodeInfoQuery, useGetAllCharactersEpisodeQuery} = episodeInfoApi