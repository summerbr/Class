import React, { Component } from 'react';

//movielist only to display movies
class MovieList extends Component {
  
  render () {
    const movieItems = this.props.movies.map((movie) => {
      //index is unique key that can be passed in map function
      return (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt="poster"/>
          <figcaption>{movie.Title}</figcaption>
        </li>
      )
    })
    
    return (
      <div>{movieItems}</div>
    )
  }
}

export default MovieList