import { useParams } from 'react-router-dom'
import { useGetEpisodeInfoQuery } from './slices/episodeInfoApi'

import CardEpisodeInfo from 'src/ui/cards/cardEpisodeInfo/CardEpisodeInfo'
import Loading from 'src/ui/loading/Loading'


const EpisodeInfo = () => {
   const  {id} = useParams()
   const  {data: data, error, isFetching} = useGetEpisodeInfoQuery(id)
  return (
   <div>
   {
      error 
      ? <h1>Error нет данных</h1>
      :   isFetching ? (
      <Loading/>
      ) : (
         <CardEpisodeInfo data={data}/>
      ) 

   
   }
  </div>
  )
}

export default EpisodeInfo