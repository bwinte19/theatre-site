<template>
<div class="wrapper">
  <div class="theatres">
    <hr>
    <div class="theatre" v-for="theatre in theatres" :key="theatre.id">
      <h2>{{theatre.name}}</h2>
      <p>{{theatre.address}}</p>
      <hr>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TheatreList',
  props: {
    theatres: Array
  },
  methods: {
  },
  computed: {
  }

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
</style>