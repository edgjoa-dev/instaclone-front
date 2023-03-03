import { createBrowserRouter } from 'react-router-dom'

import { Home } from '../pages/Home'
import { User } from '../pages/User'
import { Error404 } from '../pages/Error404'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: "/feed",
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: "user/:id",
        element: <User />,
        errorElement: <Error404 />
    },
]);