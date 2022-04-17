import React from 'react';
import { Container, MovieList, Movie } from "./styles";

function Home(){

  const movies = [
    {
      title: 'Spider Man',
      image_url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Spider-Man_No_Way_Home_poster.jpg/250px-Spider-Man_No_Way_Home_poster.jpg'
    },
    {
      title: 'X Man - Evolution',
      image_url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Spider-Man_No_Way_Home_poster.jpg/250px-Spider-Man_No_Way_Home_poster.jpg'
    }
  ]

  return(
    <Container>
      <h1>Filmes Populares</h1>
      <MovieList>

        {movies.map(movie => {
          return(
            <Movie>
              <img src={movie.image_url} alt={movie.image_url}/>
              <span>{movie.title}</span>
            </Movie>
          )
        })}

      </MovieList>
    </Container>
  );
}

export default Home;