import {FC, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import CardCharactersInfo from 'src/ui/cards/cardCharactersInfo/CardCharactersInfo'
import { useGetCharacterInfoQuery } from './slices/characterInfoApi'
import { Skeleton } from '@mui/material'


import Grid from '@mui/material/Grid';

const CharacterInfo = () => {
  const  {id} = useParams()
 const  {data: data, error, isFetching} = useGetCharacterInfoQuery(id)


 
  return (
    <div>
     {
      isFetching ? (
       <>
      <Grid sx={{display:"flex", justifyContent:"center" ,alignItems:"center", flexDirection:"column" ,textAlign:"center"}} container >
        <Grid sx={{display:"flex", justifyContent:"center" ,alignItems:"center", flexDirection:"column" ,textAlign:"center"}} item xs={12}>
          <Skeleton sx={{ textAlign:"center"}} variant="circular" width={300} height={300} />
          <Skeleton  width={300} height={50} />
        </Grid>
       
       

        <Grid sx={{width:"100%",maxWidth:"none", gap:"20px" ,display:"flex", justifyContent:"flex-start" ,alignItems:"flex-start"}} item xs={6}>
          <Skeleton  sx={{transform:"none"}} height={500} width={340} />
          <Skeleton sx={ { transform:"none"}} height={500} width={340} />
        </Grid>   
      </Grid>

     

      



     
       </>
      ) : (
        <CardCharactersInfo data={data}/>
      )
      
      
      
     }
    </div>
  )
}

export default CharacterInfo
