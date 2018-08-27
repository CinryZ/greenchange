/*
* @Author: admin
* @Date:   2018-08-16 14:50:38
* @Last Modified by:   admin
* @Last Modified time: 2018-08-21 10:31:53
*/
import vueRouter from 'vue-router'

import first from '../component/content/first.vue'
import index from '../component/content/index.vue'
import discover from '../component/content/discover.vue'
import detail from '../component/content/detail.vue'
import personInfo from '../component/content/personInfo.vue'
import register from '../component/content/register.vue'
import login from '../component/content/login.vue'
import message from '../component/content/message.vue'
import publish from '../component/content/publish.vue'
import publishDetail from '../component/content/publishDetail.vue'

export default new vueRouter({
	routes:[
		{path:'/',component:first},
		{path:'/index',component:index},
		{path:'/discover',component:discover},
		{path:'/detail',component:detail},
		{path:'/personInfo',component:personInfo},
		{path:'/register',component:register},
		{path:'/login',component:login},
		{path:'/message',component:message},
		{path:'/publish',component:publish},
		{path:'/publishDetail',component:publishDetail},
		


	]
})