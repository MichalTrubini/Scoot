import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Location from './views/Location.vue'
import Careers from './views/Careers.vue'
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import "primevue/resources/themes/bootstrap4-light-blue/theme.css"

const app = createApp(App)
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/location', component: Location },
        { path: '/careers', component: Careers },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          // If a saved position exists, scroll to it without delay
          return savedPosition;
        } else {
          // Scroll to the top of the page with a delay
          return delay(50).then(() => {
            return { top: 0, behavior: 'smooth' };
          });
        }
      }
})
app.use(router)
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.mount('#app')
