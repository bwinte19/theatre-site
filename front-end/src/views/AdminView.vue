<template>
  <div class="page">
    <h1>Admin</h1>
    <h2>Add new Movie</h2>
    <div class="form">
        <p>Title</p>
        <input v-model="title" placeholder="Title">
        <p>Description:</p>
        <textarea v-model="description"></textarea>
        <p></p>
        <p>Image URL</p>
        <input v-model="url" placeholder="Image URL">
        <p/>
        <button @click="addMovie">Add</button>
      </div>
    <p>{{this.message}}</p>
    <br><br><br><br>
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

@media (min-width: 1015px) {
  .page {
    width: 1015px;
    margin: auto;
  }
}
</style>