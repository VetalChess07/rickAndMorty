import { Character } from 'src/utils/types/charactersType';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export type CharactersFormProps ={
   setPostsError: (error:FetchBaseQueryError | null | undefined |SerializedError)=> void;
   setPostsFilter: (characters: Character[]) => void;
}