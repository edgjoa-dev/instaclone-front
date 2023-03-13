import { Home } from '../pages/Home/Home'
import { Error404 } from '../pages/Error404/Error404'
import { User } from '../pages/User';

export const routes = [
    {
        path: '/',
        element: <Home />,
        exact: true,
        errorElement: <Error404 />,
    },
    {
        path: '/:username',
        element: <User />,
        exact: true,
        errorElement: <Error404 />,
    },
];