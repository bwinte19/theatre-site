<template>
  <div class="page">
    <h1>Currently Showing at a See a Film near you:</h1>
    <MovieList :movies="movies" />
  </div>
</template>

<script>
// @ is an alias to /src
import MovieList from "../components/MovieList.vue"
import axios from 'axios';
export default {
  name: 'HomeView',
  components: {
    MovieList
  },
  data() { 
    return {
      movies: [],
    }
  },
  async created() {
    let res = await axios.get('/api/movies');
    this.movies = res.data;
  },
}
</script>



<style scoped>
.page {
  box-sizing: border-box;
  padding: 10px 20px;
  background-color: rgb(51, 51, 51);
}
h1 {
  text-align: center;
  color: white;
}

@media (min-width: 1015px) {
  .page {
    width: 1015px;
    margin: auto;
  }
}
</style>
