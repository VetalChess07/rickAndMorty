import type { LocationsType } from "src/utils/types/locationsType"
export type locationsPostsProps = {
   posts: LocationsType[]
   loadMorePosts: ()=> void
   page: number 
   isFetching: boolean
   countPages: number
}