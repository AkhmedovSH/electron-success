import Login from '../../components/auth/Login'
const auth = [
	{
		path: "/login",
		component: Login,
		exact: true,
		layout: 'auth'
	}
]

export default auth;