import  { FC, useState,ChangeEvent } from 'react'
import { Input } from '@mui/joy';
import { InputsFilterPostsProps } from './type';
import searchImg from "/public/images/search.svg"


const InputsFilterPosts:FC<InputsFilterPostsProps> = ({value,placeholder, setValue}) => {
   const [inputValue, setInputValue] = useState(value)
   console.log(value)
   const onChange = (e: ChangeEvent<HTMLInputElement>) =>{
      setInputValue(e.target.value as string)
      setValue(e.target.value as string)
   }

   return <Input
   
   onChange={(e) => onChange(e as ChangeEvent<HTMLInputElement>)} 
   placeholder={placeholder} 
   value={inputValue}
   startDecorator={  <img src={searchImg} alt="Search" />}
   sx={{
      width: "100%",
      maxWidth: "240px",
      borderRadius: '8px',
      border:"1px solid rgba(0, 0, 0, 0.38)",
      padding: '16px',
      outline:"none",
      background:"#fff",
      
     
      "&:hover":{
         borderColor:"rgba(0, 0, 0, 0.5)"
      },
     
       '&::before': {
        
        content:"none"
       },
       '&::focused': {
         transition: 'box-shadow .15s ease-in-out',
         boxShadow:"2px 2px 2px red"
        
       },
    }}

    />;
    
  
}

export default InputsFilterPosts
