import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//引入组件
import Home from '../views/Home/Home.vue';
import Cart from '../views/Cart/Cart.vue';
import Category from '../views/Category/Category.vue';
import Mine from '../views/Mine/Mine.vue';
import Search from '../views/Search/Search.vue';

//引入首页的子组件
import Index from '../views/Home/Children/Index.vue';
import Clothes from '../views/Home/Children/Clothes.vue';
import Computer from '../views/Home/Children/Computer.vue';
import Ele from '../views/Home/Children/Ele.vue';
import House from '../views/Home/Children/House.vue';
import Person from '../views/Home/Children/Person.vue';
import Phone from '../views/Home/Children/Phone.vue';
import Shoes from '../views/Home/Children/Shoes.vue';

//引入vuex
import Vuex from '@/views/Vuex/Vuex.vue'
import Vuex2 from '@/views/Vuex/Vuex2.vue'

//引入登录页面
import Login from '@/views/Mine/components/Login'

//引入列表详情页
import Listdata from '@/views/Category/components/Listdata.vue';
//引入商品详情页
import Gooddetail from '@/views/Gooddetail/Gooddetail.vue'

//引入搜索列表
import SearchList from '@/views/Search/SearchList.vue'

//设置路由

let router = new VueRouter({
	//	mode: 'history',
	routes: [{
		path: '/',
		redirect: '/home/index'
	}, {
		path: '/home',
		name: 'home',
		component: Home,
		children: [{
				path: 'index',
				component: Index
			}, {
				path: 'clothes',
				component: Clothes
			},
			{
				path: 'computer',
				component: Computer
			},
			{
				path: 'ele',
				component: Ele
			},
			{
				path: 'house',
				component: House
			},
			{
				path: 'person',
				component: Person
			},
			{
				path: 'phone',
				component: Phone
			},
			{
				path: 'shoes',
				component: Shoes
			}, {
				path: '/',
				redirect: '/home/index'
			}
		]
	}, {
		path: '/cart',
		name: 'cart',
		component: Cart
	}, {
		path: '/category/:cid',
		name: 'category',
		component: Category
	}, {
		path: '/mine',
		name: 'mine',
		component: Mine
	}, {
		path: '/search',
		name: 'search',
		component: Search
	}, {
		path: '/vuex',
		name: 'vuex',
		component: Vuex
	}, {
		path: '/vuex2',
		name: 'vuex2',
		component: Vuex2
	}, {
		path: '/login',
		name: 'login',
		component: Login
	}, {
		path: '/listdata',
		name: 'listdata',
		component: Listdata
	}, {
		path: '/goodsdetails',
		name: 'gooddetail',
		component: Gooddetail
	}, {
		path: '/searchlist',
		name: 'searchlist',
		component: SearchList
	}]
})

export default router