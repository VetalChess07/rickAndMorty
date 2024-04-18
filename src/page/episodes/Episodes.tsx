import {FC, useState, useEffect} from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHook/reduxHook'
import { useGetEpisodesQuery } from 'src/components/posts/episodes/slices/episodesApi'
import type { EpisodeType } from 'src/utils/types/episodesType'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { SerializedError } from '@reduxjs/toolkit';
import { downloadEpisodes } from 'src/components/posts/episodes/slices/episodesSlice';
import { filterNewPosts } from 'src/utils/filterNewPosts';
import EpisodesPosts from 'src/components/posts/episodes/EpisodesPosts';
import EpisodesForm from './components/episodesForm/EpisodesForm';

const Episodes:FC = () => {
  const dispatch = useAppDispatch()
  const {isLoadedEpisodes, page} = useAppSelector(state => state.episodes)
  const [isFilteredEpisodes, setIsFilteredEpisodes] = useState<boolean>(false)

  const [countPages, setCountPages] = useState(1)
  const [episodesError, setEpisodesError] = useState<FetchBaseQueryError | null| unknown  |SerializedError>(null)

  const [episodes, setEpisodes] = useState<EpisodeType[]>([])
  const [episodesFiltered, setEpisodesFiltered] = useState<EpisodeType[]>([])

  const {data: episodesData, error, isFetching} = useGetEpisodesQuery(page)

  const loadMoreEpisodes = () => {
    dispatch(downloadEpisodes(episodesData.results))
  };

  useEffect(() => {
     
    if (episodesData) {

      setCountPages(episodesData.info.pages)
      if (isLoadedEpisodes.length === 0) {
        setEpisodes(episodesData.results);
        setEpisodesFiltered(episodesData.results)
      } else {
        const newPosts = filterNewPosts(isLoadedEpisodes, episodesData.results)
        setEpisodes([...isLoadedEpisodes, ...newPosts]);
        setEpisodesFiltered([...episodesFiltered, ]) 
      }
    }else{
      if(error){
        setEpisodesError(error.status)
      }
    } 
  }, [episodesData, isLoadedEpisodes]);


    

  return (
    <div>
       <>
      <EpisodesForm
      setIsFilteredPosts={setIsFilteredEpisodes}
      setPostsFiltered={setEpisodesFiltered}
      posts={episodes}
      />
       {
      error
       ? <h1>упс что-то пошло не так <br />
        <span>
          Ошибка: {episodesError.status}
        </span>
        </h1>
       : episodes.length === 0
        ? <h1>У вас нет постов</h1>
        : <EpisodesPosts 
       
        posts={isFilteredEpisodes ? episodesFiltered : episodes} 
        page={ page } 
        loadMorePosts={ loadMoreEpisodes}  
        isFetching={isFetching} 
         countPages={countPages}
        />
       
     
    }
    </>
    </div>
  )
}

export default Episodes
