import { AuthContext } from "../contexts/AuthContext"
import {Navigate} from 'react-router-dom'
import {useContext} from 'react'

export const PrivateComponent = ({children}) => {
  const {isAuth} = useContext(AuthContext)

  if(!isAuth){
      return <Navigate to="/login" replace={false}/>
  }
  return children
}
