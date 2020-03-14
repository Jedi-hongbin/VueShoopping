import Vue from 'vue'
import App from './App.vue'
//这是导入全部MintUI，我们只需按需引入即可
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css' //样式表都得引入
Vue.use(MintUI)
// import { Lazyload } from 'mint-ui';
// Vue.use(Lazyload)//MintUi的懒加载

//初探elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import $ from 'jquery'
Vue.prototype.$ = $

// import { Header } from 'mint-ui'//引入需要的组件
//按需引入需要对应的loader Babel 两套包来实现 
//cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
//cnpm i bable-preset-env babel-preset-stage-0 -D
//Vue.component(Header.name,Header)//对引入的组件进行注册为全局组件

//导入MUI 的样式
import '../src/lib/MUI/css/mui.min.css'
import '../src/lib/MUI/css/icons-extra.css'
import '../src/lib/MUI/fonts/mui-icons-extra.ttf'
//因为picture区需要mui顶部滑块组件，需要引入js文件，再picture.vue中调用并初始化组件

//导入路由
import VueRouter from 'vue-router'
//使用路由 
Vue.use(VueRouter);

//导入axios
import axios from 'axios'
// Vue.use(axios);//不对滴，axios不是vue的组件，但是可以把它注册成vue的一个方法来使用
Vue.prototype.axios = axios;

//导入moment日期处理库
import moment from 'moment'
//利用moment做一个全局过滤器
Vue.filter('dateFilter', (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") => {
	return moment(dataStr).format(pattern)
})
//导入缩略图插件vue-preview
import VuePreview from 'vue-preview';
Vue.use(VuePreview);

//注册 vuex
import Vuex from 'vuex'
Vue.use(Vuex);

//创建veux实例
//进入时去localStorage中查看是否有数据，如果有则给car
var car = JSON.parse(localStorage.getItem('car')||'[]');
var store = new Vuex.Store({
	state:{//this.$store.state.xxx
		car:car//加入购物车中的商品的信息
	},
	mutations:{//this.$store.commit('functionName',args)
		addCar(state,information){
			//判断新添加的商品与前是否有，如果有在原先商品的数量上加上这次的数量，若没有则直接添加
			let flag = false;//如果没有相同id的，如果有再改
			state.car.some((item)=>{
				if(item.id == information.id){
					item.count += parseInt(information.count)
					flag = true;//找到相同id后
					return true
				}
			})
			if(!flag){	
				state.car.push(information)
			}
			//将更新的car数组存储到localStorage中,下次进入购物车信息保留
			localStorage.setItem('car',JSON.stringify(state.car))
		},
		changeNum(state,changeInfo){
			state.car.some(item => {
				if(item.id == changeInfo.id){
					item.count = parseInt(changeInfo.count);
					return;
				}
			})
		},
		removeGoods(state,index){
			state.car.some((item,i) =>{
				if(item.id == index){
					state.car.splice(i,1);
					localStorage.setItem('car',JSON.stringify(state.car));
					return;
				}
			})
		},
		makeMark(state,info){
			state.car.some((item)=>{
				if(item.id == info.id){
					item.select = info.select
					localStorage.setItem('car',JSON.stringify(state.car));
					return;
				}
			})
		}
	},getters:{//this.$store.gatters.xx
		total(state){
			let t = 0;
			state.car.forEach(item =>{
				t += item.count
			})
			return t;
		},
		selectNum(state){
			let number = 0;
			let money = 0;
			state.car.forEach(item=>{
				if(item.select == 'block'){
					number++;
					money += item.count * item.price;
				}
			})
			
			return {number:number,money:money};
		}
	}
})

//导入tabber对应的4个组件
import HomeComponent from '../src/components/tabbar/HomeComponent.vue'
import MemberComponent from '../src/components/tabbar/MemberComponent.vue'
import ShooppingcarComponent from '../src/components/tabbar/ShooppingcarComponent.vue'
import SearchComponent from '../src/components/tabbar/SearchComponent.vue'
import newsComponent from '../src/components/home/newsComponent.vue'
import newsInfo from '../src/components/home/newsInfo.vue'
import picture from "../src/components/home/picture.vue"
import goods from "../src/components/home/goods.vue"
import goodsInfo from "../src/components/subComponents/goodsinfo.vue"
import aboutUs from "../src/components/subComponents/aboutUs.vue"
import video from "../src/components/subComponents/video.vue"
import debounce from "../src/components/search/debounce.vue"
import scrollbar from "../src/components/search/scrollbarStyle.vue"
import feedback from "../src/components/home/feedback.vue"


Vue.config.productionTip = false

new Vue({
	router: new VueRouter({
		routes: [{
				path: "/",
				redirect: '/home'
			},
			{
				path: "/home",
				component: HomeComponent
			},
			{
				path: "/mrmber",
				component: MemberComponent
			},
			{
				path: "/shoopcar",
				component: ShooppingcarComponent
			},
			{
				path: "/search",
				component: SearchComponent
			},
			{
				path: "/home/news",
				component: newsComponent
			},
			{
				path: "/home/news/newsInfo/:id",
				component: newsInfo
			}, {
				path: "/home/picture",
				component: picture
			},{
				path:"/home/goods",
				component:goods
			},{
				path:"/home/goodsinfo/:id",
				component:goodsInfo
			},{
				path:"/home/about",
				component:aboutUs
			},{
				path:"/home/video",
				component:video
			},{
				path:"/search/debounce",
				component:debounce
			},{
				path:'/search/scrollbar',
				component:scrollbar
			},{
				path:"/home/feedback",
				component:feedback
			}
		],
		linkActiveClass: 'mui-active',
		//mui-active是tabbar底部图标高亮样式
	}),
	render: h => h(App),
	store
}).$mount('#app')
