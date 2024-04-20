import { useParams } from 'react-router-dom'
import { useGetEpisodeInfoQuery } from './slices/episodeInfoApi'

import CardEpisodeInfo from 'src/ui/cards/cardEpisodeInfo/CardEpisodeInfo'
import Loading from 'src/ui/loading/Loading'
import ErrorNotPosts from 'src/ui/errors/errorNotPosts/ErrorNotPosts'


const EpisodeInfo = () => {
   const  {id} = useParams()
   const  {data: data, error, isFetching} = useGetEpisodeInfoQuery(id)
  return (
   <div>
   {
      error 
      ? <ErrorNotPosts status={error?.status} message={error?.data.error}/>
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
