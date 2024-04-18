import {FC} from 'react'
import { CardLocationInfoProps } from './type'

import style from "./style.module.scss"
import PostsLayout from 'src/components/posts/postsLayout/PostsLayout'
import { Link } from 'react-router-dom'
import CharacterPostItem from 'src/components/postItem/characterPostsItem/CharacterPostItem'
import { useGetAllCharactersLocationsQuery } from 'src/page/locationsInfo/slices/locationsInfoApi'

import { sliceData } from 'src/utils/functions/sliceData'
import Loading from 'src/ui/loading/Loading'
import { Character } from 'src/utils/types/charactersType'

const CardLocationInfo:FC<CardLocationInfoProps> = ({data}) => {
   const { name, type,dimension, residents, url, created } =data
   const arrResidents = sliceData(residents)
   
   const {data:residentsData, error, isFetching} =useGetAllCharactersLocationsQuery(arrResidents)
   console.log(residentsData)
   return (
      <div className={style.locations}>
         <div className={style.locations__header}>
            <h2 className={style.name}>{name}</h2>
            <div className={style.desc}>
               
               <div className={style.desc__item}>
                  <h4 className={style.desc__item_title}>Type</h4>
                  <p className={style.desc__item_text}>{type}</p>
               </div>
               <div className={style.desc__item}>
                  <h4 className={style.desc__item_title}>Dimension</h4>
                  <p className={style.desc__item_text}>{dimension}</p>
               </div>
            </div>
         </div>
         <div className={style.locations__body}>
         <h3 className={style.locations__body_title}>Residents</h3>
        
        
        {

        residents.length === 0 || error
         ? <h2>нет постов</h2>
         :

         residentsData 
         ?
         <PostsLayout>

         {
         Array.isArray(residentsData)
         ? residentsData.map((resident:Character) => (
          <Link to={`/characters/${resident.id}`} key={resident.id} className={style.post}  >
            <CharacterPostItem id={resident.id} image={resident.image} species={resident.species} name={resident.name} />
          </Link>
         ))   
         : <Link to={`/characters/${residentsData.id}`} key={residentsData.id} className={style.post}  >
         <CharacterPostItem id={residentsData.id} image={residentsData.image} species={residentsData.species} name={residentsData.name} />
          </Link>        
         }
         </PostsLayout>
         : 
         <Loading/>
        
        }
    
         </div>
      </div>
  )
}

export default CardLocationInfo
