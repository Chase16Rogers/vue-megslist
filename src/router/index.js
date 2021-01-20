import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import CarDetailsPage from '../pages/CarDetailsPage.vue'
// @ts-ignore
import CarsPage from '../pages/CarsPage.vue'
// import HousesPage from '../pages/HousesPage.vue'

const routes = [
  {
    path: '/cars',
    name: 'Cars',
    component: CarsPage
  }, {
  {
    path: '/houses',
    name: 'House',
    component: HousesPage
  }, {
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  }, {
  // }, {
  //   path: '/houses/:id',
  //   name: 'HouseDetails',
  //   component: HouseDetailsPage
  // }, {
    path: '/:catchAll(.*)*',
    redirect: '/cars',
    component: null
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
