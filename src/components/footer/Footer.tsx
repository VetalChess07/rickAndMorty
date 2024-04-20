import {FC} from 'react'
import style from "./style.module.scss"

const Footer:FC = () => {
  return (
    <footer className={style.footer + ' container'}>
      Make with ❤️ for the MobProgramming team
    </footer>
  )
}

export default Footer
