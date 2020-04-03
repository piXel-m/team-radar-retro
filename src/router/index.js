import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import TeamRadar from '@/components/TeamRadar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TeamRadar',
      component: TeamRadar
    }
  ]
})
