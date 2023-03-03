
import React, { useEffect, useState } from 'react'

import { ApolloProvider } from '@apollo/client'
import client from './config/apollo'

import { BrowserRouter } from 'react-router-dom'

import { AuthPage } from './pages/auth'
import { getToken } from './utils/token'



export const App = () => {

  const [auth, setAuth] = useState()

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
        { !auth ? <AuthPage /> : <h1> Logeado </h1> }
      </ApolloProvider>
    </BrowserRouter>
  )
}
