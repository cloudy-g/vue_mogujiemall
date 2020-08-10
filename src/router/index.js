import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home.vue')
// const Fashion = () => import('@/views/home/homeContent/TabCom/Fashion.vue')
// const News = () => import('@/views/home/homeContent/TabCom/News.vue')
// const Handpick = () => import('@/views/home/homeContent/TabCom/Handpick.vue')

const Category = () => import('@/views/category/Category.vue')
const Cart = () => import('@/views/cart/Cart.vue')
const Profile = () => import('@/views/profile/Profile.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    // children: [
    //   {
    //     path: '/',
    //     redirect: 'fashion'
    //   },
    //   {
    //     path: 'fashion',
    //     component: Fashion,
    //   },
    //   {
    //     path: 'news',
    //     component: News,
    //   },
    //   {
    //     path: 'handpick',
    //     component: Handpick,
    //   }
    // ]
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

let originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch(err => err)
}
const routerReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function (location) {
  return routerReplace.call(this, location).catch(error => error)
}

export default router
