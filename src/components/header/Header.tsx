import {FC} from 'react'
import { headerNavRoutes } from '../../routes'
import { Link } from 'react-router-dom'
import logo from "public/images/logo.svg"
import style from "./style.module.scss"

const Header:FC = () => {
  return (
    <header className={style.header}>
      <div className={style.inner + ' container'}>
         <img src={logo} alt="" />
         <nav className={style.nav}>
            <ul className={style.list}>
               {headerNavRoutes.map(el => 
               <li className={style.li} key={el.text}>
                   <Link  to={el.path}>
                     {el.text}
                  </Link>
               </li>
                 
            )}
            </ul>
         </nav>
      </div>
     
      
    </header>
  )
}

export default Header
