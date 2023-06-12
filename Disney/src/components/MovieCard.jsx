import React from 'react';

const IMAGE_BASE_URL='https://image.tmdb.org/t/p/original';


function MovieCard({movie}) {
  return (
    <>
        <img src={IMAGE_BASE_URL+movie.poster_path}
        className=''/>
    </>
  )
}

export default MovieCard