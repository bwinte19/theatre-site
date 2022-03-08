<template>
<div class="wrapper">
  <div class="movies">
    <router-link v-for="movie in movies" :key="movie.id" :to="'/movie/' + movie.id">
      <div class="movie">
        <img :src=movie.url />
        <h1>{{movie.name}}</h1>
      </div>
    </router-link>
  </div>
</div>
</template>


<script>
export default {
  name: 'MovieList',
  props: {
    movies: Array
  },
  methods: {
  },
  computed: {
  }

}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.movie {
  margin: 20px 10px;
  text-align: center;
  padding: 10px;
  border: 10px dotted rgb(235, 235, 0);
  color: white;
}

.movie:hover {
  border: 10px dotted white;
  border-radius: 10px;
  color: black;
  background-color: white;
}

h1 {
  font-size: 15px;
}
</style>