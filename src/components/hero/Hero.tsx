import {FC} from 'react'
import "./style.scss"
import type { HeroProps } from './type'

const Hero:FC<HeroProps> = ({src, alt,classes}) => {
  return (
    <div className="hero">

      <img alt={alt} className={classes} src={src} />
    </div>
  )
}

export default Hero
