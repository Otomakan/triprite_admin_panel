import Vue from 'vue'
import Router from 'vue-router'
import AllReservations from '@/components/AllReservations'
import ReservationDetail from '@/components/ReservationDetail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'All reservations',
      component: AllReservations
    },
    {
      path: '/reservation/:id',
      name: 'Reservation Details',
      component: ReservationDetail
    }
  ]
})
