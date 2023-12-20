import React,{useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function Feed() {
  const {logout} = useContext(AuthContext)
  return(
    <div>
      <h1>Welcome to feed</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

