import { Character } from 'src/utils/types/charactersType';

export type CharactersFormProps ={
 
   posts: Character[] ,
   setIsFilteredPosts:(a:boolean) => void,
   setPostsFiltered: (characters: Character[]) => void,
}