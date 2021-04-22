import Index from '../../components/products/Index'
import CreateUpdate from '../../components/products/CreateUpdate'

const products = [
	{
		path: "/products",
		component: Index,
		exact: true,
	},
	{
		path: "/products/create",
		component: CreateUpdate
	},
	{
		path: "/products/update/:id",
		component: CreateUpdate
	}
]

export default products