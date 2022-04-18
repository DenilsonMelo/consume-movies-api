import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_KEY } from '../../config/key';
import { Container } from './styles';

function Details(){
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const image_path = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        const {title, poster_path, overview, release_date} = data;
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date,
        }
        setMovie(movie);
      })
  }, [id]);
  
  return(
    <Container>
      <div className='movie'>
        <img src={movie.image} alt={movie.title}/>
        <div className='details'>
          <h1>{movie.title}</h1>
          <p>Sinopse: {movie.sinopse}</p>
          <span>Release Date: {movie.releaseDate}</span>
          <Link to="/"><button>Go Back</button></Link>
        </div>
      </div>
    </Container>
  );
}

export default Details;