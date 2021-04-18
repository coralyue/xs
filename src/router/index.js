import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "首页"
    }
  },
  {
    path: '/hello',
    name: 'Hello',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Hello.vue')
  },
  {
    path: '/shuj',
    name: 'Shuj',
    component: () => import(/* webpackChunkName: "about" */ '../views/Shuj.vue'),
    meta: {
      needLogin: true,
      title:"书架"
    }
  },
  {
    path: '/fenl',
    name: 'Fenl',
    component: () => import(/* webpackChunkName: "about" */ '../views/Fenl.vue'),
    meta: {
      title:"发现"
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
    meta: {
      title:"我的"
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../components/Login.vue'),
    meta: {
      title:"登录"
    }
  },

  {
    path: '/reg',
    name: 'Reg',
    component: () => import(/* webpackChunkName: "about" */ '../components/Reg.vue'),
    meta: {
      title:"注册"
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue'),
    meta: {
      title:"详情页"
    }
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "about" */ '../views/List.vue'),
    meta: {
      title:"目录"
    }
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next)=>{
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
})

export default router
