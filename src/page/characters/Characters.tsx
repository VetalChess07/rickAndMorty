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
  
  
  const {isLoadedCharacters, page} = useAppSelector(state=> state.character)

  const [isFilteredCharacters, setIsFilteredCharacters] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  const [characters, setCharacters] = useState<Character[]>([]);
  const [countPages, setCountPages] = useState(1)

  const [charactersFiltered, setCharactersFiltered] = useState<Character[]>([])

  const { data, error, isFetching } = useGetPostsQuery(page);


  const loadMorePosts = () => {
    dispatch(downloadCharacter(data.results))
  };


  useEffect(() => {
     
    if (data) {

      setCountPages(data.info.pages)
      if (isLoadedCharacters.length === 0) {
        setCharacters(data.results);
        setCharactersFiltered(data.results)
      } else {
       
        

        const newPosts = filterNewPosts(isLoadedCharacters, data.results)
        setCharacters([...isLoadedCharacters, ...newPosts]);
        setCharactersFiltered([...charactersFiltered, ])
      
     
      }
    }
  }, [data, isLoadedCharacters]);



  return (
    <>
    <Hero src={mainImg} alt='characters' classes='characters'/>
    <CharactersForm 
    setIsFilteredPosts={setIsFilteredCharacters}
     posts={characters}
      setPostsFiltered={setCharactersFiltered} 
       />
     {
      error 
       ? <ErrorNotPosts status={error?.status} message={error?.data.error}/>
       : characters.length === 0
        ? <h1>У вас нет постов</h1>
        : <CharacterPosts 
        countPages={countPages} 
        posts={isFilteredCharacters ? charactersFiltered : characters} 
        page={ page } 
        loadMorePosts={ loadMorePosts}  
        isFetching={isFetching} />
       
     
    }
  
    </>
   
  );
}
export default Characters;