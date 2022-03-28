<template>
  
  <div class="page">
    <router-link to="/">
    <div class="back-item">
    <h2>&lt; Back</h2>
    </div>
    </router-link>
    <h1>{{movie.name}}</h1>
    <img :src=movie.url />
    <h2>Description:</h2>
    <p>{{movie.description}}</p>
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: 'MovieView',
  data() {
    return {
      movie: {}
    }
  },
  created() {
    this.movie = this.$root.$data.movies.find(movie => movie.id === parseInt(this.$route.params.id));
  }
}
</script>


<style scoped>

.page {
  text-align: center;
  box-sizing: border-box;
  padding: 10px 20px;
  background-color: rgb(51, 51, 51);
  color: white;
}
h1 {
  text-align: center;
}
h2 {
  color: white;
  margin: 0px;
}
.back-item {
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  padding: 5px;
  border: 4px solid rgb(51, 51, 51);
}
.back-item:hover {
  border-bottom: 4px solid white;
}
img {
  width: 320px;
  margin-bottom: 20px;
}
p {
  text-align: left;
  font-size: 20px;
  white-space: pre-line;
}

@media (min-width: 1015px) {
  .page {
    height: 100%;
    width: 1015px;
    margin: auto;
  }
}
</style>