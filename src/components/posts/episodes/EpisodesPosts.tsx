import {FC, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import style from './style.module.scss';
import ButtonLoadingMore from 'src/ui/buttons/buttonLoadingMore/ButtonLoadingMore';
import ButtonLoadMoreLayout from '../postsLayout/ButtonLoadMoreLayout';
import Loading from 'src/ui/loading/Loading';
import PostsLayout from '../postsLayout/PostsLayout';
import EpisodePostItem from 'src/components/postItem/episodePostItem/EpisodePostItem';

import { EpisodesPostsProps } from './type';

const EpisodesPosts:FC<EpisodesPostsProps> = ({loadMorePosts, page, posts, isFetching, countPages}) => {
  return (
    <>
      <PostsLayout>
        {posts.map((post) => (
          <li key={post.id} className={style.link}>
            <Link to={`/episodes/${post.id}`}  className={style.post}  >
              <EpisodePostItem episode={post.episode} name={post.name} airDate={post.air_date} />
            </Link>
          </li>
        
        ))}
      </PostsLayout>
     <ButtonLoadMoreLayout>
              { isFetching ? 
              <Loading/> : 
              countPages != page
              &&
              <ButtonLoadingMore isDisabled={isFetching} onClick={loadMorePosts}>Load More</ButtonLoadingMore>
              }
      </ButtonLoadMoreLayout>
    </>
  )
}

export default EpisodesPosts
