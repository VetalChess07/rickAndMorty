import type { EpisodeType } from "src/utils/types/episodesType"

export type EpisodesFormProps ={
   posts: EpisodeType[] ,
   setIsFilteredPosts:(a:boolean) => void,
   setPostsFiltered: (episodes: EpisodeType[]) => void,
}