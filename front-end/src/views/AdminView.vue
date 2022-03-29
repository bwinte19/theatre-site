<template>
  <div class="page">
    <h1>Admin</h1>
    <p>{{this.message}}</p>
    <h2>Add new Movie</h2>
    <div class="form">
        <p>Title</p>
        <input v-model="title" placeholder="Movie title">
        <p>Description:</p>
        <textarea v-model="description" placeholder="Movie description"></textarea>
        <p></p>
        <p>Image URL</p>
        <input v-model="url" placeholder="Image URL">
        <p/>
        <button @click="addMovie">Add Movie</button>
    </div>
    
    <br>
    <h2>Add new Theatre</h2>
    <div class="form">
        <p>Name</p>
        <input v-model="theatreName" placeholder="Theatre name">
        <p>Address:</p>
        <textarea v-model="address" placeholder="Theatre Address"></textarea>
        <p></p>
        <button @click="addTheatre">Add Theatre</button>
    </div>
    <br><br><br>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AdminView',
  components: {
  },
  data() {
    return {
      title: "",
      description: "",
      url: "",
      message: "",
      theatreName: "",
      address: "",
    }
  },
  computed: {
    theatres() {
      return this.$root.$data.locations;
    }
  },
  methods: {
    async addMovie() {
      let res = await axios.post('/api/addMovie', {
        title: this.title,
        description: this.description,
        url: this.url,
      });
      this.message = res.data;
      this.title = "";
      this.description = "";
      this.url = "";
    },
    async addTheatre() {
      let res = await axios.post('/api/addTheatre', {
        name: this.theatreName,
        address: this.address,
      });
      this.message = res.data;
      this.theatreName = "";
      this.address = "";
    }
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
  color: white;
  text-align: center;
}

h2 {
  color: white;
}

p {
  color: white
}

textarea {
  width: 500px;
  height: 100px;
}

button {
  width: 100px;
  height: 30px;
}

@media (min-width: 1015px) {
  .page {
    width: 1015px;
    margin: auto;
  }
}
</style>