import { createRouter,createWebHistory }    from 'vue-router'
import cardItem from './components/cardItem.vue'
import cardItem2  from './components/cardItem2.vue'
import cardItem3 from './components/cardItem3.vue'

const routes= [
    {path:'/cardItem',component:cardItem},
    {path: '/cardItem2', component : cardItem2},
    {path: '/cardItem3',component : cardItem3},
]
const router= createRouter({history:createWebHistory(),
    routes,
})

export default router