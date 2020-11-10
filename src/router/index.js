import routes from './routes'
import {getWebRoot} from '../utils'

// got the idea from
// https://github.com/ederssouza/vuejs-boilerplate

const appRouter = new VueRouter({
  mode: 'history',
  base: getWebRoot(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
})

function hasQueryParams(route) {
  return !!Object.keys(route.query).length
}

appRouter.beforeEach((to, from, next) => {
  // let toWithQuery = Object.assign({}, to, {query: from.query});
  // next(toWithQuery);
  if(!hasQueryParams(to) && hasQueryParams(from)){
    next({name: to.name, query: from.query});
  } else {
    next()
  }
})

export default appRouter