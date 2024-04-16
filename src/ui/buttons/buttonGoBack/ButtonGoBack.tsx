import {FC} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import style from "./style.module.scss"

const ButtonGoBack = ({className}:{className?:string}) => {
   const navigate = useNavigate();
   const goBack = () => {
       navigate(-1);
   };
  return (
    <Button variant="contained"
    sx={{
      backgroundColor: '#fff',
      position:'absolute',
      color: 'rgba(0, 0, 0, 1)',
      fontWeight:"700",
      boxShadow:"none",
      left:"0",
      '&:hover': {
        backgroundColor: 'rgba(242, 249, 254, 1)',
      },
    }} className={`${style.goBack}  ${className}`} onClick={goBack}>
      <img className={style.icon} src="/public/images/arrow_back.svg" alt="" />
      GO BACK
    </Button>
  )
}

export default ButtonGoBack
