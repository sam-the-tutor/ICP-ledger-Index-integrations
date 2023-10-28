import React, { useEffect, useState } from 'react'
import './App.css'
import { backend } from './declarations/backend'

import One from './components/one'
import { AuthProvider } from './use-auth-client'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return <One />
}

export default () => (
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
)
