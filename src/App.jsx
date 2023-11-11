import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login'
import { AuthProvider } from './use-auth-client'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return <Login />
}

export default () => (
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
)
