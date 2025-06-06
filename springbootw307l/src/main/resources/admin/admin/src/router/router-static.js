import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import discusszhongzhijidi from '@/views/modules/discusszhongzhijidi/list'
    import yunpixiaomaicaishou from '@/views/modules/yunpixiaomaicaishou/list'
    import mianfenfenlei from '@/views/modules/mianfenfenlei/list'
    import zhongzhijidi from '@/views/modules/zhongzhijidi/list'
    import yunpimianfenjiagong from '@/views/modules/yunpimianfenjiagong/list'
    import messages from '@/views/modules/messages/list'
    import orders from '@/views/modules/orders/list'
    import storeup from '@/views/modules/storeup/list'
    import discussyunpimianfen from '@/views/modules/discussyunpimianfen/list'
    import config from '@/views/modules/config/list'
    import yonghuxinxi from '@/views/modules/yonghuxinxi/list'
    import yunpimianfen from '@/views/modules/yunpimianfen/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/discusszhongzhijidi',
        name: '种植基地评论',
        component: discusszhongzhijidi
      }
      ,{
	path: '/yunpixiaomaicaishou',
        name: '云匹小麦采收',
        component: yunpixiaomaicaishou
      }
      ,{
	path: '/mianfenfenlei',
        name: '面粉分类',
        component: mianfenfenlei
      }
      ,{
	path: '/zhongzhijidi',
        name: '种植基地',
        component: zhongzhijidi
      }
      ,{
	path: '/yunpimianfenjiagong',
        name: '云匹面粉加工',
        component: yunpimianfenjiagong
      }
      ,{
	path: '/messages',
        name: '留言板管理',
        component: messages
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/discussyunpimianfen',
        name: '云匹面粉评论',
        component: discussyunpimianfen
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/yonghuxinxi',
        name: '用户信息',
        component: yonghuxinxi
      }
      ,{
	path: '/yunpimianfen',
        name: '云匹面粉',
        component: yunpimianfen
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
