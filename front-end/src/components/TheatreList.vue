<template>
<div class="wrapper">
  <div class="theatres">
    <hr>
    <div class="theatre" v-for="theatre in theatres" :key="theatre._id">
      <h2>{{theatre.name}}</h2>
      <p>{{theatre.address}}</p>
      <button @click="removeTheatre(theatre)">Remove Theatre</button>
      <hr>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'TheatreList',
  props: {
    theatres: Array
  },
  data: function() {
    return {
      theatreList: this.theatres
    }
  },
  methods: {
    async removeTheatre(theatre) {
      console.log("trying to remove theatre " + theatre._id);
      let res = await axios.delete('/api/theatre/' + theatre._id);
      //let deleteIndex = this.theatreList.find(el => el._id === theatre._id);
      //console.log("delete index " + deleteIndex);
      console.log(res);
      //this.theatreList.splice(deleteIndex,1);
      this.$parent.updateTheatres();
    }
  },

}
</script>

<style scoped>
* {
  color: white;
}

h2 {
  margin: 30px 0px 0px 0px;
}

p {
  margin: 10px 0px 30px 0px;
}

button {
  color: black;
  height: 30px;
}
</style>