import { useState,useEffect, FC } from 'react';
import Posts from 'src/components/posts/character/Posts';
import { useGetPostsQuery } from 'src/components/posts/character/slisec/postsApi'; 
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHook/reduxHook';
import { downloadCharacter } from 'src/components/posts/character/slisec/postsSlice';
import { Character } from 'src/utils/types/charactersType';
import { filterNewPosts } from 'src/utils/filterNewPosts';
import { useGetPostsFilterQuery } from 'src/components/posts/character/slisec/postsFilter';
import CharactersForm from './components/CharactersForm/CharactersForm';

const Characters:FC = () => {
  const {characters, page} = useAppSelector(state=> state.character)
  const dispatch = useAppDispatch()
  const [posts, setPosts] = useState<Character[]>([]);

  const { data, error, isLoading, isFetching } = useGetPostsQuery(page);
  // const {data: dataFilter} = useGetPostsFilterQuery(species )
  

  const loadMorePosts = () => {
    dispatch(downloadCharacter(data.results))
  };

  useEffect(() => {
    if (data) {
      if (characters.length === 0) {
        setPosts(data.results);
      } else {
        const newPosts = filterNewPosts(characters, data.results)
        setPosts([...characters, ...newPosts]);
      }
    }

 
  }, [data, characters]);


  return (
    <>
    <CharactersForm/>
  
     {
      error
       ? <h1>упс нет постов(</h1>
       :  <Posts posts={posts} page={page} loadMorePosts={loadMorePosts}  isFetching={isFetching} />
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
