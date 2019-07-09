const movies = require("./movie_data");
let id = 11;

module.exports = {
  getAllMovies: (req, res) => {
    res.status(200).send(movies);
  },
  createMovie: (req, res) => {
    const { title, description, year, rated, imageUrl, score } = req.body;
    movies.push({
      id,
      title,
      description,
      year,
      rated,
      imageUrl,
      score
    });
    id++;
    res.status(200).send(movies);
  },
  editMovie: (req, res) => {
    const { title, description, year, rated, imageUrl, score } = req.body;
    const { id } = req.params;
    console.log(id);

    let movieIndex = movies.findIndex(movie => movie.id == id);

    let edittedMovie = {
      id,
      title,
      description,
      year,
      rated,
      imageUrl,
      score
    };

    movies.splice(movieIndex, 1, edittedMovie);

    res.status(200).send(movies);
  },
  deleteMovie: (req, res) => {
    const { id } = req.params;
    let movieIndex = movies.findIndex(movie => movie.id == id);
    movies.splice(movieIndex, 1);

    res.status(200).send(movies);
  }
};
