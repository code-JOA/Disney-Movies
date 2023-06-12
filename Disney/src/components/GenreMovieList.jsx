import React from 'react'
import GenresList from './Constant/GenresList'

function GenreMovieList() {
    return (
    <div>
        {GenresList.genere.map((item,index)=>index<=4&&(
        <div>
            <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
        </div>
        ))}
        </div>
    )
}

export default GenreMovieList