import MinRouter from '../utils/MinRouter'

const minRouter = new MinRouter({
	routes: [
		{
			path: 'pages/index/index',
			type: 'navigateTo',
			name: 'index'
		}
	]
})

export default minRouter
