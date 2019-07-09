import React from "react";

export default function MovieCard(props) {
  return (
    <div>
      <h1>
        #{props.id} {props.title} ({props.year})
      </h1>
      <img src={props.imageUrl} alt={props.title} />
      <p>{props.description}</p>
      <span>
        Rated: {props.rated} Score: {props.score}
      </span>
      <br />
      <button onClick={() => props.decrement()}>Previous</button>
      <button onClick={() => props.increment()}>Next</button>
    </div>
  );
}
