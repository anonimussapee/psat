import { useContext } from 'react'
import { UserContext } from '../Context/ContextUser'

const ProtectRouter = ({children}) => {
  const contextUser = useContext(UserContext)

  if(!contextUser.user){
    return <Navigate to='/login'></Navigate>
  }else{
    return children
  }
}

export {ProtectRouter}