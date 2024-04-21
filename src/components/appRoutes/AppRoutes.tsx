import {FC} from 'react'
import { Route, Routes } from 'react-router-dom'
import {publickRoutes} from "../../routes"
import Layout from '../../layout/Layout'



const AppRoutes:FC = () => {
  return (
    <Routes>
      <Route path='/' Component={ Layout}>
          {publickRoutes.map(route => <Route key={route.path} path={route.path} Component={route.element} />)}
      </Route>
     
    </Routes>
  )
}

export default AppRoutes
