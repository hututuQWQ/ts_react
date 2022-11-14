import { RouteObject } from '../interface';
import Home from './../../views/home/index';

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