import React from 'react';

const IMAGE_BASE_URL='https://image.tmdb.org/t/p/original';


function MovieCard({movie}) {
  return (
    <div>
        <img src={movie.poster_path} className=''></img>
    </div>
  )
}

export default MovieCard