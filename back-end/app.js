const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/theatre', {
  useNewUrlParser: true
});

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
});

const Movie = mongoose.model('Movie', movieSchema);

// Get a list of all of the movies playing
app.get('/api/movies', async (req, res) => {
  console.log("Getting all movies");
  try {
    let movies = await Movie.find();
    res.send(movies);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/movies/:id', async (req, res) => {
  console.log("getting movie with id: " + req.params.id);
  try {
    let movie = await Movie.findOne({_id: req.params.id});
    res.send(movie);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
})

app.post('/api/addMovie', async(req, res) => {
  console.log("Adding movie " + req.body.title);
  try {
    const movie = new Movie({
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
    });
    await movie.save();
    res.send("Added movie " + req.body.title);
  } catch(error) {
    console.log(error);
    res.send("unable to add movie");
    res.sendStatus(500);
  }
});

app.listen(3001, () => console.log('Server listening on port 3001!'));
