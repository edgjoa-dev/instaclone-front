
import React, { useEffect, useMemo, useState } from 'react'

import { ApolloProvider } from '@apollo/client'
import client from './config/apollo'

import { AuthPage } from './pages/auth'
import { decodeToken, getToken } from './utils/token'
import { AuthContext } from './context/AuthContext'
import { Navigation } from './routes/Navigation'


export const App = () => {

  const [auth, setAuth] = useState(undefined)

  useEffect(() => {
    const token = getToken()
    if(!token){
      setAuth(null)
    }else{
      setAuth( decodeToken(token) )
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

  if( auth === undefined ) return null

  return (
      <ApolloProvider client={client}>
        <AuthContext.Provider value={authData}>
            { !auth ? <AuthPage /> : <Navigation /> }
        </AuthContext.Provider>
      </ApolloProvider>
  )
}
