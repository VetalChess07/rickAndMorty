import {FC, useEffect, useState, memo} from 'react'
import SelectSort from 'src/ui/select/Select'
import { arrSpeciesCharacter, arrGenderCharacter, arrStatusCharacter } from 'src/utils/dataSelect';
import { CharactersFormProps } from './type';
import { Character } from 'src/utils/types/charactersType';


const CharactersForm:FC = memo(({posts ,postsFilter, setIsFilteredPosts , setPostsFilter}: {posts: Character[], setPosts: any}) => {

  const [species, setSpecies] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [gender, setGender] = useState<string>('')

 

  const filterPosts = () =>{
    const filteredPosts = posts.filter(post =>  
      (status === 'null' || status === '' || post.status === status) && 
    (gender === 'null' || gender === '' || post.gender === gender) &&
    (species === 'null' || species === '' || post.species === species) 
    );
    setPostsFilter(filteredPosts);
    if( (status === 'null' || status === '' ) && 
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
  }, [species, gender, status, posts])
  

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
    <form>
       <SelectSort onSelectChange={onChangeSelect} placeholder='species' arrValue={arrSpeciesCharacter}/>
    <span>{species}</span>
    <br />
    <SelectSort onSelectChange={onChangeSelect} placeholder='status' arrValue={arrStatusCharacter}/>
    <span>{status}</span>
    <br />
    <SelectSort onSelectChange={onChangeSelect} placeholder='gender' arrValue={arrGenderCharacter}/>
    <span>{gender}</span>
   
    </form>
  )
})

export default CharactersForm
