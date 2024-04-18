import {FC, useEffect, useState} from 'react'
import { Avatar } from '@mui/material'
import type { CardCharactersInfoProps } from './type' 
import { Character } from 'src/utils/types/charactersType'
import {useGetCharacterInfoQuery, useGetAllEpisodesCharacterQuery } from 'src/page/characterInfo/slices/characterInfoApi'
import { Link } from 'react-router-dom'


import style from "./style.module.scss"

import { sliceData } from 'src/utils/functions/sliceData'
import type { Episode } from 'src/utils/types/episodesType'


const CardCharacterInfo:FC<CardCharactersInfoProps> = ({data}) => {

   const {id,name ,image, gender, status, species, origin, type, location, episode} = data
 
   const arrEpisode = sliceData(episode)
   const {data:episodeData, isFetching} = useGetAllEpisodesCharacterQuery(arrEpisode)


  return (
    <div className={style.inner}>
     
      <div className={style.card__character}>
        
         <div className={style.card__header}>
            <Avatar className={style.avatar} src={image} />
            <h2 className={style.name} >{name}</h2>
         </div>

         <div className={style.desc}>
               <div className={style.col}>
                  <h3 className={style.title}>Informations</h3>
                  <ul className={style.list}>
                     <li className={style.li}>
                        <h4 className={style.li__title}>Gender</h4>
                        <span className={style.li__value}>{gender}</span>
                     </li>
                     <li className={style.li}>
                        <h4 className={style.li__title}>Status</h4>
                        <span className={style.li__value}>{status}</span>
                     </li>
                     <li className={style.li}>
                        <h4 className={style.li__title}>Specie</h4>
                        <span className={style.li__value}>{species}</span>
                     </li>
                     <li className={style.li}>
                        <h4 className={style.li__title}>Origin</h4>
                        <span className={style.li__value}>{origin.name}</span>
                     </li>
                     <li className={style.li}>
                        <h4 className={style.li__title}>Type</h4>
                        <span className={style.li__value}>{type.length === 0 ? "Unknown" : type }</span>
                     </li>
                     <li className={style.li}>
                        <Link className={style.link} to={data.location.url}>
                           <div className={style.link__item} >
                              <h4 className={style.li__title}>Location</h4>
                           <span className={style.li__value}>
                              {data.location.name}
                           </span>
                           </div>
                           
                           <img src="/public/images/arrow.svg" alt="" />
                        </Link>
                     </li>
                    
                  </ul>
               </div>
               <div className={style.col}>
                  <h3 className={style.title}>Episodes</h3>
                  <ul className={style.list}>
                     { isFetching 
                     ? <span>load...</span>
                      :
                      Array.isArray(episodeData) 
                      ?  episodeData.map((episode:Episode)=>
                      <li key={episode.id}  className={style.li}>
                        <Link className={style.link} to={episode.url}>
                           <div className={style.link__item}>
                              <h4 className={style.li__title}>
                                 {episode.episode}
                              </h4>
                              <span className={style.li__value}>
                                 {episode.name}
                              </span>
                              <span className={style.li__date}>
                                 {episode.air_date}
                              </span>
                           </div>
                           <img src="/public/images/arrow.svg" alt="" />
                        </Link>                       
                     </li>
                       )
                      : <li key={episodeData.id}  className={style.li}>
                      <Link className={style.link} to={episodeData.url}>
                         <div className={style.link__item}>
                            <h4 className={style.li__title}>
                               {episodeData.episode}
                            </h4>
                            <span className={style.li__value}>
                               {episodeData.name}
                            </span>
                            <span className={style.li__date}>
                               {episodeData.air_date}
                            </span>
                         </div>
                         <img src="/public/images/arrow.svg" alt="" />
                      </Link>                       
                   </li>
                     
                    
                     }
                  </ul>
               </div>
         </div>

      
      </div> 
    </div>
  )
}

export default CardCharacterInfo
