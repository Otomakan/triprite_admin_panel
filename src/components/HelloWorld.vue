<template>
  <div class="hello">

  
    <h3 class="title">Reservations Database</h3>
 <my-table v-bind:data="allReservations"></my-table>
  
  </div>
</template>

<script>
import axios from 'axios'
import MyTable from './MyTable'


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Triprite Dashboard',
      allReservations:[]
    }
  },
  components: {
    MyTable
  },
  mounted () {
    axios
      .get('http://localhost:3000/admin/all-reservations')
      .then(response => {console.log(response.data)
      return(this.allReservations = response.data)})
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
</style>
