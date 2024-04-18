import {FC, useState, useEffect} from 'react'
import FormFilterPosts from 'src/components/formFilterPosts/FormFilterPosts'
import InputsFilterPosts from 'src/ui/inputs/inputsFilterPosts/inputsFilterPosts'

import type { EpisodesFormProps } from './type'

const EpisodesForm:FC<EpisodesFormProps> = ({posts, setIsFilteredPosts, setPostsFiltered}) => {
   const [value, setvalue] = useState<string>('')
   
  
   const filterPosts = () =>{
      const filteredPosts = posts.filter(post =>  {
       
        return (value  === '' || post.name.toLowerCase().includes(value.toLowerCase())) || 
        (value  === '' || post.episode.toLowerCase().includes(value.toLowerCase()))  
      }
        
      );
      setPostsFiltered(filteredPosts);
      if( (value === '' ) ){
        setIsFilteredPosts(false)
      }else{
          setIsFilteredPosts(true)
      }
    }

    useEffect(()=>{
      filterPosts()
    }, [value, posts])

   return (
    <FormFilterPosts>
      <InputsFilterPosts setValue={setvalue} value={value} placeholder="Filter by name or episode (ex. S01 or S01E02)"/>
    </FormFilterPosts>
  )
}

export default EpisodesForm
