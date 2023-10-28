import React from 'react'
import { useAuth } from '../use-auth-client'

const one = () => {
  const { isAuthenticated, login } = useAuth()
  console.log(isAuthenticated)
  return <button onClick={login}>Log In</button>
}

export default one
