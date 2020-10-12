import routes from './routes'

// got the idea from
// https://github.com/ederssouza/vuejs-boilerplate

const appRouter = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
})

export default appRouter