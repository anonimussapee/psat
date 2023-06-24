import { Link, useNavigate} from 'react-router-dom'
import './NavBar.css'
import {MoonIcon, SunIcon} from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ContextTheme } from '../Context/themes'
import { UserContext } from '../Context/UserProvider'

const NavBar = () => {

  let contextTheme = useContext(ContextTheme);

  let themeIconRender

  if(contextTheme.themeState=== true){
    document.documentElement.classList.add('dark')
    themeIconRender = <SunIcon className='w-8 h-7'></SunIcon>;
  }else{
    document.documentElement.classList.remove('dark')
    themeIconRender = <MoonIcon className='w-8 h-7'></MoonIcon>;
  }

  const userContext = useContext(UserContext);

  const {logout} = useContext(UserContext);


  const navegate = useNavigate()

  const handleLogout = async () => {
    try {
        await logout()
        navegate('/')
    } catch (error) {
        console.log(error.message)
    }
};

  return (
  <nav className='dark:bg-blue-950 bg-white dark:text-white ss:text-[1.3rem] sm:text-[1.5rem] font-bold'>
      <ul>
        <Link to='/'>
         <li className='nav-main--logo'><span className='main-logo img'></span><span className='inline-block'>Home</span></li>
        </Link>
      </ul>
    
    
      <ul>
      {
      userContext.user? (<Link to='/login' ><li onClick={handleLogout}>LogOut</li></Link>): ( <Link to='/login'><li>Login</li></Link>)
    }
        <li onClick={()=>{
            
            contextTheme.setThemeState(!contextTheme.themeState)

            contextTheme.darkTheme.save(!contextTheme.themeState)
          }}> {themeIconRender}
        </li>
      </ul>
    </nav>

  );

}

export {NavBar};