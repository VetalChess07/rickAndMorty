import {FC} from 'react'
import { CharacterPostItemProps } from './type'
import CardPostCharacter from 'src/ui/cards/cardPostCharacter/CardPostCharacter'

const CharacterPostItem:FC<CharacterPostItemProps> = ({id, name, image,species}) => {
  return (
    
     
      <CardPostCharacter key={id} image={image} title={name} text={species} />
    
  )
}

export default CharacterPostItem
