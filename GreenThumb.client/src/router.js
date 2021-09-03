import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard, authSettled } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    // NOTE plants will need to eventually have plant/id#
    path: '/plants',
    name: 'Plants',
    component: loadPage('PlantPage')
  },
  {
    path: '/media',
    name: 'Media',
    component: loadPage('MediaPage')
  },
  {
    path: '/mygarden',
    name: 'MyGarden',
    component: loadPage('MyGardenPage'),
    beforeEnter: authGuard
  },
  {
    path: '/garden/:id',
    name: 'Garden',
    component: loadPage('GardenPage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/posts',
    name: 'Posts',
    component: loadPage('PostsPage'),
    beforeEnter: authSettled
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
