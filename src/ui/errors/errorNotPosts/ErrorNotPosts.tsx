import {FC} from 'react'

import type { ErrorNotPostsProps } from './type'
import style from "./style.module.scss"

const ErrorNotPosts:FC<ErrorNotPostsProps> = ({status, message}) => {
  return (
    <div className={style.error}>
      <h2 className={style.error__title}>{status}</h2>
      <p className={style.error__message}>Ошибка: 
        <span>
        {message}
        </span>
         </p>
      <p className={style.error__text}>Иногда что-то ломатемя(</p>
    </div>
  )
}

export default ErrorNotPosts
