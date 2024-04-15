import  { FC, useState } from 'react'
import { FormControl, InputLabel, MenuItem} from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SelectSortProps } from './type';

const SelectSort:FC<SelectSortProps> = ({arrValue, placeholder, onSelectChange }) => {
   
   const [value, setValue] = useState('') 

   const handleChange = (e:SelectChangeEvent) =>{
      setValue(e.target.value as string)
      onSelectChange(e.target.value as string, placeholder)
   }

  return (
    
      <FormControl sx={{  minWidth: 240, fontSize:"16px"}} >
  <InputLabel   id={placeholder}>{placeholder}</InputLabel>
  <Select
    labelId={placeholder}
    id={placeholder}
    value={value}
    label={placeholder}
    onChange={handleChange}
  
  >
   {
      arrValue.map(elem => <MenuItem key={elem} value={elem}>{elem}</MenuItem>)
   }
   
  </Select>
</FormControl>
    
  )
}

export default SelectSort
