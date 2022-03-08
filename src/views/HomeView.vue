<template>
  <div class="page">
    <h1>Currently Showing at a See a Film near you:</h1>
    <MovieList :movies="movies" />
  </div>
</template>

<script>
// @ is an alias to /src
import MovieList from "../components/MovieList.vue"

export default {
  name: 'HomeView',
  components: {
    MovieList
  },
  computed: {
    movies() {
      return this.$root.$data.movies;
    },
  }
}
</script>



<style scoped>
.page {
  padding: 10px;
  background-color: rgb(51, 51, 51);
}
h1 {
  text-align: center;
  color: white;
}
</style>
