import App from './App'
import Stories from './containers/Stories'
import Home from './containers/Home'

const routes = {
  name: 'Home',
  path: '/',
  component: App,
  childRoutes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/stories', component: Stories, name: 'Stories' }
  ]
}

export default routes
