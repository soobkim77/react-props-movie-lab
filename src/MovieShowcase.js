import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    let jsx = []
    movieData.forEach(movie => {
      let card = <MovieCard title={movie.title} rating ={movie.IMDBRating} posterSrc={movie.poster} genreArr = {movie.genres}/>
      jsx.push(card)
    })
    return jsx
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
