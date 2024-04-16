import {FC} from 'react'
import type { LocationsPostItemProps } from './type'
import CardPostLocation from 'src/ui/cards/cardPostLocation/CardPostLocation'

const LocationsPostItem:FC<LocationsPostItemProps> = ({name, url, type}) => {
  return (
    <CardPostLocation name={name} url={url} type={type} />
  )
}

export default LocationsPostItem
