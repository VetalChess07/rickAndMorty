import { Character } from 'src/utils/types/charactersType';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export type CharactersFormProps ={
 
   posts: Character[] ,
   setIsFilteredPosts:(a:boolean) => void,
   setPostsFiltered: (characters: Character[]) => void,
}