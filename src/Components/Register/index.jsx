import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserProvider'

const Register = () => {
    const [email, setEmail] = useState('jdxevs@gmail.com')
    const [password, setPassword] = useState('123456')


    const {registerUser} = useContext(UserContext)
    const navegate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('procesando form...' + email + password)
        try {

            await registerUser(email, password)
            navegate('/home')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 p-10'>
                <input
                    className='border-black rounded-lg p-2'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className='border-black rounded-lg p-2'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' className='rounded-lg bg-gray-500 border-white text-white'>Register</button>
            </form>
        </>
    )
}

export { Register}