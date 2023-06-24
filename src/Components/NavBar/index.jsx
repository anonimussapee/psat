import { Link } from 'react-router-dom'
import './NavBar.css'
import {MoonIcon, SunIcon} from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ContextTheme } from '../Context/themes'

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

  return (
    <nav className='dark:bg-blue-950 bg-white dark:text-white ss:text-[1.3rem] sm:text-[1.5rem] font-bold'>
      <ul>
        <Link to='/'>
        <li className='nav-main--logo'><span className='main-logo img'></span><span className='inline-block'>Home</span></li>
        </Link>
      </ul>
      <ul>
      <Link to='/'>
        <li>Blog</li>
        </Link>
        <Link to='/'>
        <li>Proyectos</li>
        </Link>
        <Link to='/'>
        <li>Contactame</li>
        </Link>
        <li onClick={()=>{
          
          contextTheme.setThemeState(!contextTheme.themeState)

          contextTheme.darkTheme.save(!contextTheme.themeState)
        }}> {themeIconRender}</li>
      </ul>
    </nav>
  );

}

export {NavBar};