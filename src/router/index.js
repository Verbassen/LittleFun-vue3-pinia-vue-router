import { createRouter, createWebHashHistory } from 'vue-router'

let router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue'),
      name: 'login'
    },
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      name: 'Layout', 
      children: [
        {
          path: '',
          component: () => import('@/views/Home/index.vue'),
          name: 'default'
        },
        {
          path: 'category/:id',
          component: () => import('@/views/Category/index.vue'),
          name:'Category'
        },
        {
          path:'category/sub/:id',
          component: () => import('@/views/SubCategory/index.vue'),
          name:'SubCategory'
        },
        {
          path:'detail/:id',
          component: () => import('@/views/Detail/index.vue'),
        },
        {
          path:'cartlist',
          component:()=>import('@/views/CartList/index.vue'),
          name:'CartList'
        },
        {
          path:'checkout',
          component:()=>import('@/views/Checkout/index.vue'),
          name:'Checkout'
        },
        {
          path:'pay',
          component:()=>import('@/views/Pay/index.vue'),
          name:'Pay'
        },
        {
          path:'paycallback',
          component:()=>import('@/views/Pay/PayBack.vue'),
          name:'PayBack'
        },
        {
          path:'member',
          component:()=>import('@/views/Member/index.vue'),
          name:'Member',
          children:[
            {
              path:'',
              component:()=>import('@/views/Member/components/UserInfo.vue'),
              name:'UserInfo',
            },
            {
              path:'order',
              component:()=>import('@/views/Member/components/UserOrder.vue'),
              name:'UserOrder',
            }
          ]
        }
      ]
    }
    // {
    //     path: '/404',
    //     component: () => import('@/views/404/index.vue'),
    //     name: '404',
    // },
    // {
    //     path: '/:pathMatch(.*)*',
    //     redirect: '/404',
    //     name: 'Any',
    // },
  ],
  //滚动行为
  scrollBehavior() {
    return {
      top: 0,
      left: 0
    }
  }
})

export default router
