import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Location from './views/Location.vue'
import Careers from './views/Careers.vue'

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/location', component: Location },
        { path: '/careers', component: Careers },
    ],
    })
app.use(router)
app.mount('#app')
