import {FC} from 'react'
import { useNavigate } from 'react-router-dom';

import style from "./style.module.scss"

const ButtonGoBack = ({className}:{className?:string}) => {
   const navigate = useNavigate();
   const goBack = () => {
       navigate(-1);
   };
  return (
    <button className={`${style.goBack}  ${className}`} onClick={goBack}>
      <img className={style.icon} src="/public/images/arrow_back.svg" alt="" />
      GO BACK
    </button>
  )
}

export default ButtonGoBack
