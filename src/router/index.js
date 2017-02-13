import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const User = {
	template: '<a>User {{ $route.params.id }}</a>'
}


import ItemView from '../views/ItemView.vue'


export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		// redirect: '/top'
		component: ItemView
	}, {
		path: '/user/:id',
		component: User
	}]

})