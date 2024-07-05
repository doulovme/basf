import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomePage from '@/components/home/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path:'/agree',
    name:'agree',
    component:() => import('@/components/agree/AgreePage.vue')
  },
  {
    path:'/privacy',
    name:'privacy',
    component:() => import('@/components/privacy/PrivacyPage.vue')
  },
  {
    path:'/book',
    name:'book',
    component:() => import('@/components/book/BookPageUD.vue'),
  },
  {
    path:'/mybook',
    name:'mybook',
    component:() => import('@/components/mybook/MyBook.vue')
  },
  {
    path:'/nobook',
    name:'nobook',
    component:()=>import('@/components/mybook/NoBook.vue')
  },
  {
    path:'/bookdetail',
    name:'bookdetali',
    component:()=>import('@/components/book/bookdetails/BookDetail.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
