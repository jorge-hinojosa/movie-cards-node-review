import React, { Component } from "react";
import data from "../moviedata";
import MovieCard from "./MovieCard";

export default class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: data,
      count: 0
    };
  }
  increment = () => {
    let newCount;
    if (this.state.count === this.state.movies.length - 1) {
      newCount = 0;
    } else {
      newCount = this.state.count + 1;
    }
    this.setState({ count: newCount });
  };
  decrement = () => {
    let newCount;
    if (this.state.count === 0) {
      newCount = this.state.movies.length - 1;
    } else {
      newCount = this.state.count - 1;
    }

    this.setState({ count: newCount });
  };

  render() {
    const viewMovies = this.state.movies.map(movie => {
      return (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          description={movie.description}
          year={movie.year}
          rated={movie.rated}
          imageUrl={movie.imageUrl}
          score={movie.score}
          increment={this.increment}
          decrement={this.decrement}
        />
      );
    });

    return <div>{viewMovies[this.state.count]}</div>;
  }
}
