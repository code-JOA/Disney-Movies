import React, { useEffect }  from 'react'
import GlobalApi from '../Services/GlobalApi'

function MovieList({genreId}) {
    useEffect(()=>{

    },[])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp)=>{
            console.log(resp.data.results)
        }
    }
  return (
    <div>MovieList</div>
  )
}

export default MovieList