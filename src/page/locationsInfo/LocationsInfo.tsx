import { useParams } from 'react-router-dom'
import { useGetLocationsInfoQuery } from './slices/locationsInfoApi'

import CardLocationInfo from 'src/ui/cards/cardLocationInfo/CardLocationInfo'
import Loading from 'src/ui/loading/Loading'
import ErrorNotPosts from 'src/ui/errors/errorNotPosts/ErrorNotPosts'


const LocationsInfo = () => {
   const  {id} = useParams()
   const  {data: data, error, isFetching} = useGetLocationsInfoQuery(id)
  return (
   <div>
   {
    error
    ? <ErrorNotPosts status={error?.status} message={error?.data.error}/>
    :
    isFetching ? (
     <Loading/>
    ) : (
      <CardLocationInfo data={data}/>
    )
   }
  </div>
  )
}

export default LocationsInfo
