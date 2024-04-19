import {FC} from 'react'
import type { CardEpisodeInfoProps } from './type'

import style from "./style.module.scss"
import PostsLayout from 'src/components/posts/postsLayout/PostsLayout'
import { Link } from 'react-router-dom'
import CharacterPostItem from 'src/components/postItem/characterPostsItem/CharacterPostItem'
import { useGetAllCharactersLocationsQuery } from 'src/page/locationsInfo/slices/locationsInfoApi'

import { sliceData } from 'src/utils/functions/sliceData'
import Loading from 'src/ui/loading/Loading'
import { Character } from 'src/utils/types/charactersType'
import { useGetAllCharactersEpisodeQuery } from 'src/page/episodeInfo/slices/episodeInfoApi'



const CardEpisodeInfo:FC<CardEpisodeInfoProps> = ({data}) => {

   const {id, name, air_date ,episode, characters, created} = data
   const arrCharacters = sliceData(characters)
   
   const {data:charactersData, error, isFetching} = useGetAllCharactersEpisodeQuery(arrCharacters)

  return (
  
      <div className={style.locations}>
         <div className={style.locations__header}>
            <h2 className={style.name}>{name}</h2>
            <div className={style.desc}>
               
               <div className={style.desc__item}>
                  <h4 className={style.desc__item_title}>Episode</h4>
                  <p className={style.desc__item_text}>{episode}</p>
               </div>
               <div className={style.desc__item}>
                  <h4 className={style.desc__item_title}>Date</h4>
                  <p className={style.desc__item_text}>{air_date}</p>
               </div>
            </div>
         </div>
         <div className={style.locations__body}>
         <h3 className={style.locations__body_title}>Cast</h3>
        
        
        {

        characters.length === 0 || error
         ? <h2>нет постов</h2>
         :

         charactersData
         ?
         <PostsLayout>

         {
         Array.isArray(charactersData)
         ? charactersData.map((character:Character) => (
          <Link to={`/characters/${character.id}`} key={character.id} className={style.post}  >
            <CharacterPostItem id={character.id} image={character.image} species={character.species} name={character.name} />
          </Link>
         ))   
         : <Link to={`/characters/${charactersData.id}`} key={charactersData.id} className={style.post}  >
         <CharacterPostItem id={charactersData.id} image={charactersData.image} species={charactersData.species} name={charactersData.name} />
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

export default CardEpisodeInfo
