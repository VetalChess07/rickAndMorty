import {FC, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import CardCharacterInfo from 'src/ui/cards/cardCharacterInfo/CardCharacterInfo'
import { useGetCharacterInfoQuery } from './slices/characterInfoApi'
import SkeletonCharacter from 'src/ui/skeletons/SkeletonCharacter'

const CharacterInfo:FC = () => {
  const  {id} = useParams()
 const  {data: data, error, isFetching} = useGetCharacterInfoQuery(id)


 
  return (
    <div>
     {
      isFetching ? (
       <>
        <SkeletonCharacter/>
       </>
      ) : (
        <CardCharacterInfo data={data}/>
      )
     }
    </div>
  )
}

export default CharacterInfo
