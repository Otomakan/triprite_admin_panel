<template>
  <div class="hello">

      <h1> RESERVATION {{reservationID}} </h1>
    <my-table v-bind:data="flightsDetails"></my-table>
    <my-table v-bind:data="passengersDetails"></my-table>

  </div>
</template>

<script>
import MyTable from './MyTable'
import axios from 'axios'
export default {
  name: 'Reservation Detail',
  data () {
    return {
      flightsDetails:[],
      passengersDetails:[],
      reservationID : this.$route.params.id
    }
  },
  components: {
    MyTable
  },
  mounted () {
      const verificationToken = localStorage.getItem('verificationToken')
    axios
      .get(process.env.BACKEND_SERVER + '/admin/flight-and-passenger-details/' + this.reservationID, 
            {headers:{
                verificationToken: verificationToken
            }})
      .then(response => {console.log(response.data)
      return(this.flightsDetails = response.data.flightsDetails, this.passengersDetails = response.data.passengersDetails)})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  width:100vw;
}
</style>
