import {FC, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import PostItem from '../../postItem/characterPostsItem/CharacterPostItem';
import style from './style.module.scss';
import ButtonLoadingMore from 'src/ui/buttons/buttonLoadingMore/ButtonLoadingMore';
import ButtonLoadMoreLayout from '../postsLayout/ButtonLoadMoreLayout';
import Loading from 'src/ui/loading/Loading';
import PostsLayout from '../postsLayout/PostsLayout';

import LocationsPostItem from 'src/components/postItem/locationsPostsItem/LocationsPostItem';

import type { locationsPostsProps } from './type';

const LocationsPosts:FC<locationsPostsProps> = ({loadMorePosts, page, posts, isFetching, countPages}) => {
  return (
    <>
      <PostsLayout>
        {posts.map((post) => (
          <li key={post.id} className={style.link}>
            <Link to={`/locations/${post.id}`}  className={style.post}  >
              <LocationsPostItem name={post.name} type={post.type} />
            {/* <PostItem id={post.id} image={post.image} species={post.species} name={post.name} /> */}
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
  );
}

export default LocationsPosts
