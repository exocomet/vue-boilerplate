import Main from '../views/Main.vue'
import About from '../views/About.vue'

const routes = [{
  name: 'main',
  path: '/',
  component: Main
}, {
  name: 'about',
  path: '/about',
  component: About
}]

export default routes