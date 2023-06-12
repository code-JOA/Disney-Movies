import React from 'react'

function MovieList({genreId}) {

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp)=>{
            console.log(res)
        }
    }
  return (
    <div>MovieList</div>
  )
}

export default MovieList