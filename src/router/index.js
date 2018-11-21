import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home.vue'
import login from '@/components/login/login.vue'

Vue.use(Router)


let router = new Router({
  routes: [{
      path: '/',
      redirect: 'login'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    from.name ? next({ name: from.name }) : next('/');
  } else {
    next();
  }
})

export default router
