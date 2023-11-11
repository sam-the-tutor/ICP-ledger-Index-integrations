import React from 'react'
import { useAuth } from '../use-auth-client'
import Ledger from './Ledger'

const one = () => {
  const { isAuthenticated, login, principal, logout } = useAuth()
  return (
    <>
      {isAuthenticated ? (
        <Ledger />
      ) : (
        <button
          style={{ backgroundColor: 'brown', color: 'white' }}
          onClick={login}
        >
          Log in
        </button>
      )}
    </>
  )
}

export default one
