import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LevelsPage from "./views/LevelsPage";
import Welcome from "./views/Welcome";

Vue.use(Router);

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: Home
    },*/
    {
      path: '/levels',
      name: 'levels',
      component: LevelsPage
    },
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    }
  ]
})
