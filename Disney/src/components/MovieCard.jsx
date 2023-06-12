import React from 'react'

const BASE_URL='https://movie'

function MovieCard({movie}) {
  return (
    <div>
        <img src={movie.poster} className=''></img>
    </div>
  )
}

export default MovieCard