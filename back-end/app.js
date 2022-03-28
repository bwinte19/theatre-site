const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


// Get a list of all of the items in the museum.
app.get('/api/movies', async (req, res) => {
  try {
    res.send("This api end will get all the movies eventually");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3001, () => console.log('Server listening on port 3001!'));
