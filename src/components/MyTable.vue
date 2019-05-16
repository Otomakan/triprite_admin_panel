<template>
<div>
    <div class="input-wrapper">
    Search the Table
    <input  v-model="input" placeholder="">
    </div>
  <table class="rtable">
    <thead>
        <tr>
            <th v-for="key in keys" v-bind:key="key">
            {{key}}
            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="entry in filteredData" v-bind:key="entry.id" v-on:click="goToReservation(entry.id)">
          

            <td v-for="value in entry" v-bind:key="value">
                
                {{value}}
            </td>
        </tr>
    </tbody>
    </table>
    </div>
</template>

<script>

export default {

  props: ['data'],
  data (){
      return{
          input:""
      }
  },
  computed: {
  keys: function() {
    //   console.log(this.data)
    //   if(this.data){
        if(typeof this.data[0]==="object"){
            
        return Object.keys(this.data[0])
        }
    //   }
  },
  filteredData: function () {
        var input, filter, table, tr, td, i, txtValue;
        // input = document.getElementById("myInput");
        filter = this.input.toUpperCase();
        // table = document.getElementById("myTable");
        // tr = table.getElementsByTagName("tr");
        let filteredData = []
        let data = this.data
        if(typeof data[0]==="object"){
            // const keys = Object.keys(this.data[0])
            // // Loop through all table rows, and hide those who don't match the search query
            for (i = 0; i < this.data.length; i++) {
                console.log(`data ${i} is:`)
                console.log(data[i])
                for(let key in data[i]){
                    if(typeof data[i][key] == ("string"||"number")){
                        if (data[i][key].toString().toUpperCase().indexOf(filter) > -1) {
                            filteredData.push(this.data[i])
                            break
                        }
                    }
                }
            }   
            return filteredData
        }
    }
  },
  methods: {
      goToReservation: function (entryID) {
          console.log('click')
          this.$router.push({ name: 'Reservation Details', params: { id: entryID }})
      }
  }
}
</script>


<style lang="scss">
/*!
// CSS only Responsive Tables
// http://dbushell.com/2016/03/04/css-only-responsive-tables/
// by David Bushell
*/

:root {
  --dark-grey: rgba(0, 0, 0, 0.65);
  --grey: rgb(128, 129, 130);
  --light-grey: #dadce0;
  --light-brown-grey: #bdada3;
  --primary-color: rgb(30, 121, 214);
  --secondary-color:  rgb(255, 48, 101);
  --thirdly-color: rgb(21, 34, 102);
  --secondary-green:rgb(80, 208, 137);
  --primary-green:rgb(28, 187, 99);
  --light-blue: rgb(79, 176, 237);
  --primary-orange: rgb(244, 131, 7);
  position: absolute;
  --yellow: #FFA400;
  --white: white;
  --border-radius:10px;
  --font-size-extra-small:10px;
  --font-size-small:12px;
  --font-size-medium:15px;
  --font-size-large:18px;
  --font-size-huge:40px;
  --input-height:50px;
  --input-padding:5px;
  --input-margin:5px;
  --main-font: "Roboto";
  --secondary-font: "Open Sans";
  --third-font: 'Montserrat', sans-serif;
  --box-shadow-card: 0px 5px 9px 0px rgba(0, 0, 0, 0.13);
  /* --box-shadow-card:-3.554px 33.814px 122px 0px rgba(121, 63, 4, 0.33); */
  --box-shadow-button: 0px 5px 9px 0px rgba(0, 0, 0, 0.13);
  --box-shadow-button-hover:  0px 5px 9px 0px rgba(0, 0, 0, 0.23);
  --padding-card: 15px;
}
.input-wrapper{
    width:100vw;
    margin:10px;
}
a {
    text-decoration: none;
    color:black;
}
.rtable {
  /*!
  // IE needs inline-block to position scrolling shadows otherwise use:
  // display: block;
  // max-width: min-content;
  */
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
  
  overflow-x: auto;
  
  // optional - looks better for small cell values
  white-space: nowrap;

  border-collapse: collapse;
  border-spacing: 0;
}

.rtable,
.rtable--flip tbody {
  // optional - enable iOS momentum scrolling
  -webkit-overflow-scrolling: touch;
  
  // scrolling shadows
  background: radial-gradient(left, ellipse, rgba(0,0,0, .2) 0%, rgba(0,0,0, 0) 75%) 0 center,
              radial-gradient(right, ellipse, rgba(0,0,0, .2) 0%, rgba(0,0,0, 0) 75%) 100% center;
  background-size: 10px 100%, 10px 100%;
  background-attachment: scroll, scroll;
  background-repeat: no-repeat;
}

// change these gradients from white to your background colour if it differs
// gradient on the first cells to hide the left shadow
.rtable td:first-child,
.rtable--flip tbody  tr:first-child a {
  // background-image: linear-gradient(to right, rgba(255,255,255, 1) 50%, rgba(255,255,255, 0) 100%);
  background-repeat: no-repeat;
  background-size: 20px 100%;
}

// gradient on the last cells to hide the right shadow
.rtable td:last-child,
.rtable--flip tbody tr:last-child a {
  // background-image: linear-gradient(to left, rgba(255,255,255, 1) 50%, rgba(255,255,255, 0) 100%);
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-size: 20px 100%;
}

.rtable th {
  font-size: 11px;
  text-align: left;
  text-transform: uppercase;
  background: var(--secondary-color);
  color: white;
}
.rtable tr {
  cursor: pointer;
  &:hover{
    background: var(--light-grey);
  }
}

.rtable th,
.rtable td {
  padding: 6px 12px;
  border: 1px solid var(--secondary-color);
}

.rtable--flip {
  display: flex;
  overflow: hidden;
  background: none;
}

.rtable--flip thead {
  display: flex;
  flex-shrink: 0;
  min-width: min-content;
}

.rtable--flip tbody {
  display: flex;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
}

.rtable--flip tr a {
  display: flex;
  flex-direction: column;
  min-width: min-content;
  flex-shrink: 0;
}

.rtable--flip td,
.rtable--flip th {
  display: block;
}

.rtable--flip td {
  background-image: none !important;
  // border-collapse is no longer active
  border-left: 0;
}

// border-collapse is no longer active
.rtable--flip th:not(:last-child),
.rtable--flip td:not(:last-child) {
  border-bottom: 0;
}

/*!
// CodePen house keeping
*/

body {
  margin: 0;
  padding: 25px;
  color: #494b4d;
  font-size: 14px;
  line-height: 20px;
}

h1, h2, h3 {
  margin: 0 0 10px 0;
  color: #1d97bf;
}

h1 {
  font-size: 25px;
  line-height: 30px;
}

h2 {
  font-size: 20px;
  line-height: 25px;
}

h3 {
  font-size: 16px;
  line-height: 20px;
}

table {
  margin-bottom: 30px;
}


code {
  background: #fffbcc;
  font-size: 12px;
}

</style>
