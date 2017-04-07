import Home from '../components/Home'
import News from '../components/News'
import Login from '../components/children/Login'
import Reg from '../components/children/Reg'
import New from '../components/children/New.vue'

const routes = [
	{
		path: '/',
		redirect: '/home' 
	},{
		path: '/home',
		component: Home,
		children: [
			{
				path: '/home/login',
				component: Login
			},{
				path: '/home/reg',
				component: Reg
			}
		]
	},{
		path: '/news',
		component: News,
		children: [
			{
				path: '/news/new',
				component: New
			}
		]
	}
]


export default routes
