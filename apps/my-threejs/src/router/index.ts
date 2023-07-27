import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const Layouts = () => import('@/layouts/index.vue')

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layouts,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/moving-car/index.vue'),
        name: 'Home',
        meta: {
          title: '首页',
          svgIcon: 'home',
          affix: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes: constantRoutes
})

export default router
