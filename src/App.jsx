
import React, { useEffect, useState } from 'react'

import { ApolloProvider } from '@apollo/client'
import client from './config/apollo'

import { BrowserRouter } from 'react-router-dom'

import { AuthPage } from './pages/auth'
import { getToken } from './utils/token'
import { AuthContext } from './context/AuthContext'



export const App = () => {

  const [auth, setAuth] = useState(undefined)

  const authData = {
    name: 'Edgar Joaquin',
    email:'flores@gmail.com'
  }

  useEffect(() => {
    const token = getToken()
    if(!token){
      setAuth(null)
    }else{
      setAuth(token)
    }
  }, [])
  

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <AuthContext.Provider value={authData}>
        { !auth ? <AuthPage /> : <h1> Logeado </h1> }
        </AuthContext.Provider>
      </ApolloProvider>
    </BrowserRouter>
  )
}
