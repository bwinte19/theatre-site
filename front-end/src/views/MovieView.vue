<template>
  
  <div class="page">
    <router-link to="/">
    <div class="back-item">
    <h2>&lt; Back</h2>
    </div>
    </router-link>
    <h1>{{movie.title}}</h1>
    <img :src=movie.url />
    <div class="votes">
      <p><img class="icon" src="../assets/thumbsup.png" @click="upvote"/> <img class="icon" src="../assets/thumbsdown.png" @click="downvote"/></p>
      <p>{{movie.upvotes}} &nbsp; | &nbsp; {{movie.downvotes}}</p>
    </div>
    <h2>Description:</h2>
    <p>{{movie.description}}</p>
    <button @click="deleteMovie">Remove Movie</button>
  </div>
</template>


<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'MovieView',
  data() {
    return {
      movie: {},
      spaceBuffer: "   ",
    }
  },
  async created() {
    await this.getMovie();
  },
  methods: {
    async getMovie() {
      let res = await axios.get('/api/movies/' + this.$route.params.id);
      this.movie = res.data;
    },
    async upvote() {
      await axios.put('/api/movies/upvote/' + this.movie._id);
      await this.getMovie();
    },
    async downvote() {
      await axios.put('/api/movies/downvote/' + this.movie._id);
      await this.getMovie();
    },
    async deleteMovie() {
      await axios.delete('/api/movies/' + this.movie._id);
      this.$router.push({name: 'home'});
    }
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
.votes {
  text-align: center;
  width: 400px;
  margin: 10px auto;
  height: 30px;
}

.icon {
  width: 25px;
  margin: 0px 10px 0px 10px;
  padding: 0px;
}

.icon:hover {
  cursor: pointer;
}

button {
  padding: 10px;
}

.votes p {
  text-align: center;
  margin: 0px;
  padding: 0px;
}
h1 {
  text-align: center;
}
h2 {
  text-align: left;
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