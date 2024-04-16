import { Outlet, useLocation } from 'react-router-dom'
import Header from 'src/components/header/Header'
import ButtonGoBack from 'src/ui/buttons/buttonGoBack/ButtonGoBack'
import { arrRoutesisGoBackDisabled } from 'src/routes'


const Layout = () => {
  const location = useLocation()
  return (
    <>
     <Header/>
     <main>
      {
        !arrRoutesisGoBackDisabled.includes(location.pathname) &&   <ButtonGoBack/>
      }
      <Outlet/>
     </main>
     <footer></footer>
    </>
  )
}

export default Layout
