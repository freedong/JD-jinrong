import Vue from "vue"
import Router from "vue-router"
// 首页页面
import Home from "../home/index.vue"
// 理财页面
import Money from "../money/index.vue"
// 白条页面
import Ious from "../ious/index.vue"
// 众筹页面
import Raise from "../raise/index.vue"
import "../../css/reset.scss"

Vue.use(Router)

export default new Router({
	// mode:'history',//这个是去除链接中#的，加上后刷新非首页页面会报错
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
        	path:'/money',
        	name:"money",
        	component: Money,
        },
        {
            path:'/ious',
            name:'ious',
            component:Ious,
        },
        {
            path:'/raise',
            name:'raise',
            component:Raise,
        }
    ],
})
