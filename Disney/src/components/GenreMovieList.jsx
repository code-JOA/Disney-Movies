import React from 'react'
import GenreList from './components/GenreList.jsx'

function GenreMovieList() {
    return (
    <div>
        {GenresList.genere.map((item,index)=>index<=4&&(
        <div>
            <h2>{item.name}</h2>
        </div>
        ))}
        </div>
    )
}

export default GenreMovieList