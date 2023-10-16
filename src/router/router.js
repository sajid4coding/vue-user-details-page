import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Sidebar from '../components/Sidebar.vue'
import Profile from '../components/Profile.vue'


const routes = [
    {
        path: '/', components: {
            default: Home,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/profile', components: {
            default: Profile,
            LeftSideBar: Sidebar
        }
    },

   
   
]

// const isAuthenticated = () => {
//     return localStorage.getItem('token')=='123'
// }

const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach((to, from, next) => {
//     if(to.meta.requiresAuth && !authStore.isAuthenticated){
//         next('/login')
//     }else{
//         next()
//     }
// })

export default router
