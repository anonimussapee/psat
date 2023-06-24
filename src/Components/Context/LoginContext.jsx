import { createContext, useState } from 'react';

const LoginContext = createContext();

const LoginContextProvider = ({children}) =>{

  let [user, setUser] = useState(false)
  
  return (
    <LoginContext.Provider value={{
      user,
      setUser
    }}>
      {children}
    </LoginContext.Provider>
  )

}

export {LoginContext, LoginContextProvider}