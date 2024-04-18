import type { EpisodeType } from "src/utils/types/episodesType"

export type EpisodesPostsProps = {
   posts: EpisodeType[]
   loadMorePosts: ()=> void
   page: number 
   isFetching: boolean
   countPages: number
}