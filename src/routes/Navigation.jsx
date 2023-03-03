import React from 'react'
import { Route, Router } from 'react-router-dom'
import { router } from './routes'
import {map} from 'lodash'

export const Navigation = () => {
    return (
        <Router>
                { map(router, (route, i)=> (
                    <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        render={(props)=><route.element {...props}  />}
                    />
                ) )}
        </Router>
    )
}
