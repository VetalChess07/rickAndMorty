import type { LocationsType } from "src/utils/types/locationsType"

export type LocationsFormProps  ={
 
   posts: LocationsType[] ,
   setIsFilteredPosts:(a:boolean) => void,
   setPostsFiltered: (characters: LocationsType[]) => void,
}