
import React, { useState } from 'react'

import { ApolloProvider } from '@apollo/client'
import client from './config/apollo'

import { BrowserRouter } from 'react-router-dom'

import { AuthPage } from './pages/auth'
import { Box } from '@chakra-ui/react'



export const App = () => {

  const [auth, setAuth] = useState()

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        { !auth ? <AuthPage /> : <h1> Logeado </h1> }
      </ApolloProvider>
    </BrowserRouter>
  )
}
