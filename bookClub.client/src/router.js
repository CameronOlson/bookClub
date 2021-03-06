import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

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
    path: '/',
    name: 'Movie',
    component: loadPage('MoviePage')
  },
  {
    path: '/',
    name: 'Book',
    component: loadPage('BookPage')
  },
  {
    path: '/',
    name: 'Music',
    component: loadPage('MusicPage')
  },
  {
    path: '/',
    name: 'Game',
    component: loadPage('GamePage')
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
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
