import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const locationInfoApi = createApi({
  reducerPath: 'locationInfoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/location' }


  ),
  endpoints: (builder) => ({


    getAllCharactersLocations: builder.query({
      query: (characters ) => {
        const res = `https://rickandmortyapi.com/api/character/${characters}`
        console.log(res) 
        return res 
      },
     
    
    }),

   getLocationsInfo: builder.query({
      query: (id) => `${id}`,
    }),
   
    

  }),
})


export const {useGetLocationsInfoQuery, useGetAllCharactersLocationsQuery} = locationInfoApi