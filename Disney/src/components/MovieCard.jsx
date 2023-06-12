import React from 'react'

const BASE_URL='https://moviedb'

function MovieCard({movie}) {
  return (
    <div>
        <img src={movie.posterUrl} className=''></img>
    </div>
  )
}

export default MovieCard