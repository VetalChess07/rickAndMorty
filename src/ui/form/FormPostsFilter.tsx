import  { FC } from 'react'
import { FormPostsFilterProps } from './type'

const FormPostsFilter:FC<FormPostsFilterProps> = ({children, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default FormPostsFilter
