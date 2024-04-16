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



  return (
    <>
    <CharactersForm 
    setIsFilteredPosts={setIsFilteredPosts}
     posts={posts}
      setPostsFiltered={setPostsFiltered} 
       />
     {
      error
       ? <h1>упс что-то пошло не так <br />
        <span>
          Ошибка: {postsError.status}
        </span>
        </h1>
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

// setPosts(prevPosts => {
//   const newPosts = data.results.filter(newPost => !prevPosts.some(prevPost => prevPost.id === newPost.id));
//   return [...prevPosts, ...newPosts];
// });

// useEffect(() => {
   
//   console.log(characters, page)
//    if (data ) {
   
//       setPosts(prevPosts => {
// const newPosts = data.results.filter(newPost => !prevPosts.some(prevPost => prevPost.id === newPost.id));
//   return [...prevPosts, ...newPosts];
// });
//   }
//   else if(data && characters.length !== 0 ){
//     console.log(characters, data.results)
//     setPosts(characters, data.results)
//   }

  

 
// }, [data, page]);

// async function getAllStatuses(url) {
//   let allStatuses = [];

//   while (url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     const statuses = data.results.map(character => character.species);
//     allStatuses.push(...statuses);
//     url = data.info.next; // Получение ссылки на следующую страницу
//   }

//   // Извлечение уникальных статусов
//   const uniqueStatuses = [...new Set(allStatuses)];
//   console.log(uniqueStatuses)
//   return uniqueStatuses;
// }

// // Вызов функции для получения всех статусов
// const ff =   getAllStatuses('https://rickandmortyapi.com/api/character')
//   .then(statuses => {
//     console.log('Все виды статусов:', statuses);
//   })
//   .catch(error => {
//     console.error('Ошибка при получении данных:', error);
//   });

//   console.log(ff)
