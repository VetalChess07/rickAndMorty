import {FC, useEffect, useState, memo} from 'react'
import SelectSort from 'src/ui/select/Select'
import { arrSpeciesCharacter, arrGenderCharacter, arrStatusCharacter } from 'src/utils/dataSelect';
import InputsFilterPosts from 'src/ui/inputs/inputsFilterPosts/inputsFilterPosts';
import { CharactersFormProps } from './type';
import FormFilterPosts from 'src/components/formFilterPosts/FormFilterPosts';

const CharactersForm:FC<CharactersFormProps> = memo(({posts , setIsFilteredPosts , setPostsFiltered}) => {

  const [name, setName] = useState<string>('')
  const [species, setSpecies] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [gender, setGender] = useState<string>('')


  const filterPosts = () =>{
    const filteredPosts = posts.filter(post =>  
      (name  === '' || post.name.toLowerCase().includes(name.toLowerCase())) && 
      (status === 'null' || status === '' || post.status === status) && 
    (gender === 'null' || gender === '' || post.gender === gender) &&
    (species === 'null' || species === '' || post.species === species) 
    );
    setPostsFiltered(filteredPosts);
    if( (name === '' ) && 
    (status === 'null' || status === '' ) && 
    (species === 'null' || species === '' ) &&
    (species === 'null' || species === '' )   )
    {
      setIsFilteredPosts(false)
    }else{
     
        setIsFilteredPosts(true)
    }

  }

  useEffect(()=>{
    
    filterPosts()
  }, [species, gender, status, posts,name])


  const onChangeSelect = (e:string, type:string) =>{
      switch (type) {
        case 'species':
          setSpecies(e);
          break;
        case 'status':
          setStatus(e);
          break;
        case 'gender':
          setGender(e);
          break;
        default:
          break;
      }
  }

 
  return (
    <FormFilterPosts>
      <InputsFilterPosts setValue={setName} value={name} placeholder="ffff"/>
      
       <SelectSort onSelectChange={onChangeSelect} placeholder='species' arrValue={arrSpeciesCharacter}/>
  
    <SelectSort onSelectChange={onChangeSelect} placeholder='status' arrValue={arrStatusCharacter}/>
   
    <SelectSort onSelectChange={onChangeSelect} placeholder='gender' arrValue={arrGenderCharacter}/>
    
    </FormFilterPosts>
  )
})

export default CharactersForm
