
import React, { useEffect, useMemo, useState } from 'react'

import { ApolloProvider } from '@apollo/client'
import client from './config/apollo'

import { AuthPage } from './pages/auth'
import { getToken } from './utils/token'
import { AuthContext } from './context/AuthContext'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'




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
      <ApolloProvider client={client}>
        <AuthContext.Provider value={authData}>
            { !auth ? <AuthPage /> : <RouterProvider router={router} /> }
        </AuthContext.Provider>
      </ApolloProvider>
  )
}
