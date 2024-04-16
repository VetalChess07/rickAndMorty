import  { ReactNode } from 'react'
import style from "./style.module.scss"

const FormFilterPosts = ({children}: {children:ReactNode}) => {
  return (
    <form  className={style.form__filter}>
      {children}
    </form>
  )
}

export default FormFilterPosts
