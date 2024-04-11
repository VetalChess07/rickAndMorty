import {FC} from 'react'
import { PostItemProps } from './type'
import CardPost from 'src/ui/card/CardPost'

const PostItem:FC<PostItemProps> = ({id, name, image,species}) => {
  return (
    
     
      <CardPost key={id} image={image} title={name} text={species} />
    
  )
}

export default PostItem
