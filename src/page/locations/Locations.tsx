import {FC, useState, useEffect} from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHook/reduxHook'
import { useGetLocationsQuery } from 'src/components/posts/locations/slices/locationsApi'
import type { LocationsType } from 'src/utils/types/locationsType'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { SerializedError } from '@reduxjs/toolkit';
import { downloadLocation } from 'src/components/posts/locations/slices/locationsSlice';
import { filterNewPosts } from 'src/utils/filterNewPosts';
import LocationsPosts from 'src/components/posts/locations/LocationsPosts';
import LocationsForm from './components/locationsForm/LocationsForm';

const Locations:FC = () => {

  const dispatch = useAppDispatch()

  const {isLoadedLocations, page} = useAppSelector(state => state.locations)
  const [isFilteredLocations, setIsFilteredLocations] = useState<boolean>(false)
  const [countPages, setCountPages] = useState(1)
  const [locationsError, setLocationsError] = useState<FetchBaseQueryError | null| unknown  |SerializedError>(null)
  
  const [locations, setLocations] = useState<LocationsType[]>([]);
  const [locationsFiltered, setLocationsFiltered] = useState<LocationsType[]>([])

  const {data:locationsData, error, isFetching} = useGetLocationsQuery(page)


  const loadMorePosts = () => {
    dispatch(downloadLocation(locationsData.results))
  };

  
  useEffect(() => {
     
    if (locationsData) {

      setCountPages(locationsData.info.pages)
      if (isLoadedLocations.length === 0) {
        setLocations(locationsData.results);
        setLocationsFiltered(locationsData.results)
      } else {
        const newPosts = filterNewPosts(isLoadedLocations, locationsData.results)
        setLocations([...isLoadedLocations, ...newPosts]);
        setLocationsFiltered([...locationsFiltered, ]) 
      }
    }else{
      if(error){
         setLocationsError(error.status)
      }
    } 
  }, [locationsData, isLoadedLocations]);

  console.log(locationsFiltered)

  return (
    <>
      <LocationsForm
      setIsFilteredPosts={setIsFilteredLocations}
      setPostsFiltered={setLocationsFiltered}
      posts={locations}
      />
       {
      error
       ? <h1>упс что-то пошло не так <br />
        <span>
          Ошибка: {locationsError.status}
        </span>
        </h1>
       : locations.length === 0
        ? <h1>У вас нет постов</h1>
        : <LocationsPosts 
       
        posts={isFilteredLocations ? locationsFiltered : locations} 
        page={ page } 
        loadMorePosts={ loadMorePosts}  
        isFetching={isFetching} 
         countPages={countPages}
        />
       
     
    }
    </>
  )
}

export default Locations
