import {createContext, useState} from 'react'

export const FirebaseCotext =createContext(null)
export const AuthCotext =createContext(null)


export default function Context ({children}) {
    const [user,setUser]=useState('Hello')
    return(
        <AuthCotext.Provider value={{user,setUser}}>
       {children}
        </AuthCotext.Provider>
    )
}
