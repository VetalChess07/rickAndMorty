import { useState,useEffect, FC } from 'react';
import CharacterPosts from 'src/components/posts/character/CharacterPosts';
import { useGetPostsQuery } from 'src/components/posts/character/slices/charactersApi'; 
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHook/reduxHook';
import { downloadCharacter } from 'src/components/posts/character/slices/charactersSlice';
import { Character } from 'src/utils/types/charactersType';
import { filterNewPosts } from 'src/utils/filterNewPosts';
import CharactersForm from './components/CharactersForm/CharactersForm';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { SerializedError } from '@reduxjs/toolkit';
import Hero from 'src/components/hero/Hero';
import ErrorNotPosts from 'src/ui/errors/errorNotPosts/ErrorNotPosts';

import mainImg from "/public/images/main_img.jpg"

const Characters:FC = () => {
  
  
  const {characters, page} = useAppSelector(state=> state.character)

  const [isFilteredPosts, setIsFilteredPosts] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  const [posts, setPosts] = useState<Character[]>([]);
  const [countPages, setCountPages] = useState(1)
  const [postsError, setPostsError] = useState<FetchBaseQueryError | null| unknown  |SerializedError>(null)

  const [postsFiltered, setPostsFiltered] = useState<Character[]>([])

  const { data, error, isFetching } = useGetPostsQuery(page);


  const loadMorePosts = () => {
    dispatch(downloadCharacter(data.results))
  };


  useEffect(() => {
     
    if (data) {

      setCountPages(data.info.pages)
      if (characters.length === 0) {
        setPosts(data.results);
        setPostsFiltered(data.results)
      } else {
       
        

        const newPosts = filterNewPosts(characters, data.results)
        setPosts([...characters, ...newPosts]);
        setPostsFiltered([...postsFiltered, ])
      
     
      }
    }else{
      if(error){
         setPostsError(error.status)
      }
    } 
  }, [data, characters]);

  console.log(error?.data.error)

  return (
    <>
    <Hero src={mainImg} alt='characters' classes='characters'/>
    <CharactersForm 
    setIsFilteredPosts={setIsFilteredPosts}
     posts={posts}
      setPostsFiltered={setPostsFiltered} 
       />
     {
      error 
       ? <ErrorNotPosts status={error?.status} message={error?.data.error}/>
       : posts.length === 0
        ? <h1>У вас нет постов</h1>
        : <CharacterPosts 
        countPages={countPages} 
        posts={isFilteredPosts ? postsFiltered : posts} 
        page={ page } 
        loadMorePosts={ loadMorePosts}  
        isFetching={isFetching} />
       
     
    }
  
    </>
   
  );
}
export default Characters;