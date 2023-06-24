import './App.css'
import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom'
import { Home } from '../Home'
import { NotFound } from '../NotFound'
import { NavBar } from '../../Components/NavBar'
import { ContextThemeProvider } from '../../Components/Context/themes'
import { SignIn} from '../Signin'
import { useContext } from 'react'
import { UserContext, UserProvider } from '../../Components/Context/UserProvider'


const AppRoutes = () => {

 const userContext = useContext(UserContext);

  let routes = useRoutes([
    {path:'/', element :userContext.user? <Home/> :<Navigate replace to='/login'/>},
    {path:'/home', element :userContext.user? <Home/> :<Navigate replace to='/login'/> },
    {path:'/login', element : <SignIn/> },
    {path:'/*', element : <NotFound/> },

  ])
  return routes 
}

function App() {

  return (
      <UserProvider>
        <BrowserRouter>
          <ContextThemeProvider>
            <AppRoutes/>
            <NavBar/>
          </ContextThemeProvider>  
        </BrowserRouter>
      </UserProvider>
      
   
   
  )
}

export default App
