import React, { useEffect, useState } from 'react';

import { API_KEY } from '../../config/key';
import { Container, MovieList, Movie } from "./styles";

function Home(){

  const [movies, setMovies] = useState([]);
  const image_path = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [])

  return(
    <Container>
      <h1>Filmes Populares</h1>
      <MovieList>

        {movies.map(movie => {
          return(
            <Movie key={movie.id}>
              <img src={`${image_path}${movie.poster_path}`} alt={`${image_path}${movie.poster_path}`}/>
              <span>{movie.title}</span>
            </Movie>
          )
        })}

      </MovieList>
    </Container>
  );
}

export default Home;