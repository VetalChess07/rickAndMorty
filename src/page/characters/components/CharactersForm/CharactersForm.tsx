import {FC, useState} from 'react'
import SelectSort from 'src/ui/select/Select'
import { arrSpeciesCharacter, arrGenderCharacter, arrStatusCharacter } from 'src/utils/dataSelect';

const CharactersForm:FC = () => {

   const [species, setSpecies] = useState<string>('')
   const [status, setStatus] = useState<string>('')
   const [gender, setGender] = useState<string>('')
  
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
}

export default CharactersForm
