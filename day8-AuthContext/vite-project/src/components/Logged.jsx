
import React,{useContext} from 'react'

import { AuthContext } from '../contexts/AuthContext'

export const Logged = () => {
    const { isAuth , token } = useContext(AuthContext)

    return (
        <div>
           <p>Status: {isAuth === "false" ? "Logged Out" : "Logged In"}</p>
         <p>Token: {token}</p>
        </div>
    )
}