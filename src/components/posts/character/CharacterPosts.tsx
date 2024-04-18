import React, { useState, useEffect, FC } from 'react';
import { Link } from 'react-router-dom';
import CharacterPostItem from '../../postItem/characterPostsItem/CharacterPostItem';
import style from './style.module.scss';
import ButtonLoadingMore from 'src/ui/buttons/buttonLoadingMore/ButtonLoadingMore';
import Loading from 'src/ui/loading/Loading';
import ButtonLoadMoreLayout from '../postsLayout/ButtonLoadMoreLayout';
import PostsLayout from '../postsLayout/PostsLayout';


import { CharacterPostsProps } from './type';

const CharacterPosts:FC<CharacterPostsProps> = ({loadMorePosts, page, posts, isFetching, countPages}) => {


  return (
    <>
      <PostsLayout>
        {posts.map((post) => (
          <li key={post.id} className={style.link}>
            <Link to={`/characters/${post.id}`}  className={style.post}  >
              <CharacterPostItem id={post.id} image={post.image} species={post.species} name={post.name} />
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
};

export default CharacterPosts;