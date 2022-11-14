import Home from './../../views/home/index';
import { RouteObject } from 'react-router-dom';

const homeRouter: Array<RouteObject> = [
    {
        path: "/home",
        element: <Home />,
        children: [
            {
                path: "/home/index",
                element: <Home />,

            }
        ]
    }
];

export default homeRouter;