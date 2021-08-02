import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

import Home from './components/Home';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import VideoGames from './components/VideoGames';
Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutMe },
  { path: '/projects', component: Projects },
  { path: '/videogames', component: VideoGames },
]

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')