import React from 'react'
import GenreList from './Constant/GenreList'

function GenreMovieList() {
    return (
    <div>
        {GenresList.genere.map((item,index)=>index<=4&&(
        <div>
            <h2 className='text-[20px] text-white'>{item.name}</h2>
        </div>
        ))}
        </div>
    )
}

export default GenreMovieList