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
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
        <Skeleton variant="circular" width={300} height={300} />
        </Grid>
       
        <Grid item xs={12}>
          <Skeleton  width={300} height={50} />
        </Grid>

        <Grid item xs={6}>
        <Skeleton  height={500}  />
      
        </Grid>
        <Grid item xs={6}>
          <Skeleton height={500} />
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
