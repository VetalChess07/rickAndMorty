import {FC, useEffect, useState, memo} from 'react'
import SelectSort from 'src/ui/select/Select'
import InputsFilterPosts from 'src/ui/inputs/inputsFilterPosts/inputsFilterPosts';
import type { LocationsFormProps } from './type';
import FormFilterPosts from 'src/components/formFilterPosts/FormFilterPosts';
import { arrLocationTypes, arrDimensions } from 'src/utils/dataSelect';

const LocationsForm:FC<LocationsFormProps> = ({posts, setIsFilteredPosts, setPostsFiltered}) => {
   const [name, setName] = useState<string>('')
   const [type, setType] = useState<string>('')
   const [dimension, setDimension] = useState<string>('')

   
   
   const filterPosts = () =>{
    
      const filteredPosts = posts.filter(post =>  
         
        (name  === '' || post.name.toLowerCase().includes(name.toLowerCase())) && 
        (type === 'null' || type === '' || post.type === type) && 
      (dimension === 'null' || dimension === '' || post.dimension === dimension)
      );
      setPostsFiltered(filteredPosts);
      if( (name === '' ) && 
      (type === 'null' || type === '' ) && 
      (dimension === 'null' || dimension === '' )   )
      {
        setIsFilteredPosts(false)
      }else{
       
          setIsFilteredPosts(true)
      }
  
    }
  
    useEffect(()=>{
      console.log(type, dimension)
      console.log('ff')
      filterPosts()
    }, [dimension,type, posts,name])


    const onChangeSelect = (e:string, type:string) =>{
      console.log(type, e)
      switch (type) {
        case 'Type':
          setType(e);
          break;
        case 'Dimension':
          setDimension(e);
          break;
        default:
            break;
      }
  }



   return (
    <FormFilterPosts>
      <InputsFilterPosts setValue={setName} value={name} placeholder="Filter by name..."/>
      
      <SelectSort onSelectChange={onChangeSelect} placeholder='Dimension' arrValue={arrDimensions}/>
      
   <SelectSort onSelectChange={onChangeSelect} placeholder='Type' arrValue={arrLocationTypes}/>
     
    </FormFilterPosts>
  )
}

export default LocationsForm
