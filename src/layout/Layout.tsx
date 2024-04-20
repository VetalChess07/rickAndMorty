import { Outlet, useLocation } from 'react-router-dom'
import Header from 'src/components/header/Header'
import ButtonGoBack from 'src/ui/buttons/buttonGoBack/ButtonGoBack'
import { arrRoutesisGoBackDisabled } from 'src/routes'
import Footer from 'src/components/footer/Footer'


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
     <Footer/>
    </>
  )
}

export default Layout
