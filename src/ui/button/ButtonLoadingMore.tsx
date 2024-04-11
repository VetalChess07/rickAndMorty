import {FC} from 'react'
import { ButtonLoadingMoreProps } from './type'
import { Button } from '@mui/material'


const ButtonLoadingMore:FC<ButtonLoadingMoreProps> = ({children, onClick,isDisabled}) => {

   const buttonStyles = {
      backgroundColor: 'rgba(242, 249, 254, 1)',
      color: 'rgba(33, 150, 243, 1)',
      boxShadow:"6px 6px 6px rgba(0, 0, 0, .14)",
       transition:"all .3s",
      '&:hover': {
        
         backgroundColor: 'rgba(33, 150, 243, 1)' ,
         color:'rgba(242, 249, 254, 1)',
      },
    };

  return (
    
      <Button  disabled={isDisabled} sx={buttonStyles} onClick={onClick} variant="contained">{children}</Button>
    
  )
}

export default ButtonLoadingMore
