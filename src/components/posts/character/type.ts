import { Character } from "src/utils/types/charactersType"

export type PostsProps = {
   posts: Character[]
   loadMorePosts: ()=> void
   page: number 
   isFetching: boolean
   countPages: number
}