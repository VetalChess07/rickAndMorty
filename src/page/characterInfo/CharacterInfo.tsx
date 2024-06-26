import {FC, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import CardCharacterInfo from 'src/components/cards/cardCharacterInfo/CardCharacterInfo'
import { useGetCharacterInfoQuery } from './slices/characterInfoApi'
import SkeletonCharacter from 'src/ui/skeletons/SkeletonCharacter'
import ErrorNotPosts from 'src/ui/errors/errorNotPosts/ErrorNotPosts'

const CharacterInfo:FC = () => {
  const  {id} = useParams()
 const  {data: data, error, isFetching} = useGetCharacterInfoQuery(id)


 
  return (
    <div>
     {
      error 
      ? <ErrorNotPosts status={error?.status} message={error?.data.error}/>
      : isFetching ? 
      
       <>
        <SkeletonCharacter/>
       </>
       : (
        <CardCharacterInfo data={data}/>
      )
     }
    </div>
  )
}

export default CharacterInfo
