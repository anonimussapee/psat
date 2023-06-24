import { createContext, useState } from 'react';
import {useLocaleStorage} from './useLocaleStorage'

const ContextTheme = createContext();

const ContextThemeProvider = ({children}) =>{

  let [themeState, setThemeState] = useState(false)
  
  let darkTheme = useLocaleStorage('theme', false)

  setTimeout(() => {
    if(darkTheme.data === true){
      setThemeState(true)
    }else{
      setThemeState(false)
      
    }
  }, 10)

  return (
    <ContextTheme.Provider value={{
      themeState,
      setThemeState, 
      darkTheme
    }}>
      {children}
    </ContextTheme.Provider>
  )

}

export {ContextTheme, ContextThemeProvider}