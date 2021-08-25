import Vue from 'vue'
import VueRouter from 'vue-router'

const HomeView = () => import("../views/home_view/home_view");
const CategoryView = () => import("../views/category_view/category_view");
const ProfileView = () => import("../views/profile_view/profile_view");
const ShopCarView= () => import("../views/shopCart_view/shopCar_view");
const DetailView = () => import("../views/detail/Detail")

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomeView
  },
  {
    path: '/category',
    component: CategoryView
  },
  {
    path: '/shopCar',
    component: ShopCarView
  },
  {
    path: '/profile',
    component: ProfileView
  },
  {
    path: '/detail',
    component: DetailView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
