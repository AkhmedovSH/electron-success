import React from 'react'
import products from "./products";

import Home from '../../components/home/Home'
import About from '../../components/about/About'
import notFound from '../../components/notFound/notFound'

const routes = [
	{
		path: "/",
		component: Home,
		exact: true,
	},
	{
		path: "/about",
		component: About,
		private: false,
	},
	{
		path: "/not-found",
		component: notFound,
		private: true,
	},
	...products,
];

export default routes;