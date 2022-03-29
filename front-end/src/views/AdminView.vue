<template>
  <div class="page">
    <h1>Admin</h1>
    <TheatreList :theatres="theatres" />
    <br><br><br><br>
  </div>
</template>

<script>
import TheatreList from '../components/TheatreList.vue'
export default {
  name: 'AdminView',
  components: {
    TheatreList,
  },
  computed: {
    theatres() {
      return this.$root.$data.locations;
    }
  }
}

</script>



<style scoped>
.page {
  box-sizing: border-box;
  padding: 10px 20px;
  background-color: rgb(51, 51, 51);
}

h1 {
  color: white;
  text-align: center;
}

@media (min-width: 1015px) {
  .page {
    width: 1015px;
    margin: auto;
  }
}
</style>