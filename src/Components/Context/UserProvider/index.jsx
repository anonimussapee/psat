import { createContext, useEffect, useState } from 'react'
import { auth } from '../../Firebase/firebaseConfig.js'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(false)

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user) {
                const { uid, email, photoURL, displayName } = user
                setUser({ uid, email, photoURL, displayName })
            } else {
                setUser(null)
            }
        })
        return () => unsuscribe()
    }, [])

    const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const logOutUSer = () => signOut(auth)

    return (
        <UserContext.Provider
            value={{ user, setUser, registerUser, loginUser, logout:logOutUSer }}
        >
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}