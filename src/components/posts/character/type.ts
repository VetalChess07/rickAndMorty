import { Character } from "src/utils/types/charactersType"

export type CharacterPostsProps = {
   posts: Character[]
   loadMorePosts: ()=> void
   page: number 
   isFetching: boolean
   countPages: number
}