const express = require("express");
const app = express();

const PORT = 4000;

const mc = require("./movies_controller");

app.use(express.json());

app.get("/api/movies", mc.getAllMovies);
app.post("/api/movies", mc.createMovie);
app.put("/api/movies/:id", mc.editMovie);
app.delete("/api/movies/:id", mc.deleteMovie);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
