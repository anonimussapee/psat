import { Layout } from '../../Components/Layout'
import { Register } from '../../Components/Register';
import { Login } from '../../Components/Login';

const SignIn = () => {

return (
  <Layout>
    <h1>Sign In</h1>
    <div className='bg-blue-600 w-[100%] flex flex-col items-center h-auto'>

      <Register/>
    </div>
    <div className='bg-blue-950 w-[100%] flex flex-col items-center h-auto'>

    <Login/>
    </div>

  </Layout>
)
}

export {SignIn}