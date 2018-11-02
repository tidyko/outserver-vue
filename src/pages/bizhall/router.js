import Vue from 'vue'
import Router from 'vue-router'
import Index from './App.vue'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  routes: [{
    //http://localhost:8080/weixinopen/outserver/html/bizhall/
    path: '',
    name: 'index',
    component: Index
  }],
  // 去掉地址后面的#
  mode: 'history'
})

// router.beforeEach((to, from, next) => {
//   next()
// })

// router.afterEach(route => {
// })

export default router