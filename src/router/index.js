import { createRouter, createWebHashHistory } from 'vue-router'

let router = createRouter({
	history: createWebHashHistory(),
	routes: [
        {
            path: '/login',
            component: () => import('@/views/Login/index.vue'),
            name: 'login',
        },
        {
            path: '/',
            component: () => import('@/views/Layout/index.vue'),
            name: 'Layout',
            children:[
                {
                    path:'',
                    component: () => import('@/views/Home/index.vue'),
                },
                {
                    path:'Category',
                    component: () => import('@/views/Category/index.vue'),
                }
            ]
        },
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
    ]
    ,
	//滚动行为
	scrollBehavior() {
		return {
			top: 0,
			left: 0,
		}
	},
})

export default router