import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import NewsDetail from '@/components/NewsDetail'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		component: List
	},
	{
		path : '/detail/:id',
		component: NewsDetail
	}]
})