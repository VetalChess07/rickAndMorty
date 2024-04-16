import React, { ReactNode } from 'react'
import style from "./style.module.scss"

const PostsLayout = ({children}:{children:ReactNode}) => {
  return (
    <div  className={style.posts__containner}>
      <ul className={style.posts__inner}>
        {children}
      </ul>
    </div>
    
  )
}

export default PostsLayout
