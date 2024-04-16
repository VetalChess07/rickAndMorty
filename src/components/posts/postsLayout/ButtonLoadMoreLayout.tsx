import React, { ReactNode } from 'react'
import style from "./style.module.scss"

const ButtonLoadMoreLayout = ({children}:{children:ReactNode}) => {
  return (
   <div className={style.posts__button_loadMore}>
      {children}
   </div> 
  )
}

export default ButtonLoadMoreLayout