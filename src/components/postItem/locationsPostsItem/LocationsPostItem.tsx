import {FC} from 'react'
import type { LocationsPostItemProps } from './type'
import CardPostLocation from 'src/ui/cards/cardPostLocation/CardPostLocation'

const LocationsPostItem:FC<LocationsPostItemProps> = ({name, type}) => {
  return (
    <CardPostLocation name={name}  type={type} />
  )
}

export default LocationsPostItem
