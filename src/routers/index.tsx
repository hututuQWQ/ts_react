import { RouteObject } from '../routers/interface';
import { useRoutes } from 'react-router-dom';
import Login from './../views/login/index';

const metaRouters = import.meta.glob("./modules/*.tsx", { eager: true, import: 'default' }) as any;

// * 处理路由
export const routerArray: RouteObject[] = [];

Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach((key: any) => {
		routerArray.push(metaRouters[item][key]);
	});
});

export const rootRouter: RouteObject[] = [
	{
		path: "/login",
		element: <Login />,
	},
	...routerArray,
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;