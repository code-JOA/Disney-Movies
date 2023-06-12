import React from 'react'
import GenreList from './components/GenreList.jsx'

const GenreMovieList() {
    return (
    <div>
        {GenresList.genere.map((item,index)=>
        <div>
            <h2>{item.name}</h2>
        </div>
        ))}
        </div>
  )
}

export default GenreMovieList