import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ReservationDetail from '@/components/ReservationDetail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/all-reservations',
      name: 'All reservations',
      component: HelloWorld
    },
    {
      path: '/reservation/:id',
      name: 'Reservation Details',
      component: ReservationDetail
    }
  ]
})
