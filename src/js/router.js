import VueRouter from 'vue-router'

import index from '../components/index/index.vue'
import first from '../components/index/first.vue'
import view from '../components/index/view.vue'
import ticket from '../components/index/ticket.vue'
import food from '../components/index/food.vue'
import my from '../components/index/my.vue'
import login from '../components/index/login.vue'
import registration from '../components/index/registration.vue'
import phoneCall from '../components/index/phoneCall.vue'
import more from '../components/index/more.vue'
import hotel from '../components/index/hotel.vue'

export default new VueRouter({
	routes:[
		{
			path:'/',
			component:first,
			redirect:'/index'
		},
		{
			path:'/index',component:index
		},
		{
			path:'/view',component:view
		},
		{
			path:'/ticket',component:ticket
		},
		{
			path:'/food',component:food
		},	
		{
			path:'/my',component:my
		},
		{
			path:'/login',component:login
		},
		{
			path:'/registration',component:registration
		},
		{
			path:'/phoneCall',component:phoneCall
		},
		{
			path:'/more',component:more
		},
		{
			path:'/hotel',component:hotel
		},
		{
			path:'/*',redirect:'/index'
		}
	]
})