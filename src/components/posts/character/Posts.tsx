import React, { useState, useEffect, FC } from 'react';
import { useGetPostsQuery } from './slices/charactersApi';
import { Link } from 'react-router-dom';
import PostItem from '../../postItem/PostItem';
import style from './style.module.scss';
import ButtonLoadingMore from 'src/ui/buttons/buttonLoadingMore/ButtonLoadingMore';
import Loading from 'src/ui/loading/Loading';

import { PostsProps } from './type';

const Posts:FC<PostsProps> = ({loadMorePosts, page, posts, isFetching, countPages}) => {


  return (
    <div className={style.posts}>
      <ul className={style.posts__inner}>
        {posts.map((post) => (
          <Link to={`/characters/${post.id}`} key={post.id} className={style.post}  >
            <PostItem id={post.id} image={post.image} species={post.species} name={post.name} />
          </Link>
        ))}
        

      </ul>
     
      <div className={style.posts__button_loadMore}>
        { isFetching ? 
        <Loading/> : 
        countPages != page
        &&
        <ButtonLoadingMore isDisabled={isFetching} onClick={loadMorePosts}>Load More</ButtonLoadingMore>
        }
      </div>
      
    </div>
  );
};

export default Posts;