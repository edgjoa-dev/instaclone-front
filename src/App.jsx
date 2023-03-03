
import React, { useEffect, useMemo, useState } from 'react'

import { ApolloProvider } from '@apollo/client'
import client from './config/apollo'

import { BrowserRouter } from 'react-router-dom'

import { AuthPage } from './pages/auth'
import { getToken } from './utils/token'
import { AuthContext } from './context/AuthContext'
import { Home } from './pages/Home'



export const App = () => {

  const [auth, setAuth] = useState(undefined)

  useEffect(() => {
    const token = getToken()
    if(!token){
      setAuth(null)
    }else{
      setAuth(token)
    }
  }, [])


  const logout = ()=> {
    console.log('Cerrar sesión');
  }
  
  const setUser = (user)=> {
    setAuth(user)
  }

  const authData = useMemo(() => ({
    auth,
    logout,
    setUser,
  }),
    [auth]
  );

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <AuthContext.Provider value={authData}>
        { !auth ? <AuthPage /> : <Home /> }
        </AuthContext.Provider>
      </ApolloProvider>
    </BrowserRouter>
  )
}
