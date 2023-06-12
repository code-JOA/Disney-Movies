import React, { useEffect, useState }  from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'


function MovieList({genreId}) {
    const [movieList, setMovieList]=useState([])
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then((resp)=>{
            // console.log(resp.data.results)
            setMovieList(resp.data.results);
        })
    }

    return (
        <div>
        <HiChevronLeft className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer " 
        onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer right-0' 
        onClick={()=>sliderRight(elementRef.current)}/>


        <div className='flex overflow-x-auto gap-8
        scrollbar-none pt-5 px-3 pb-5'>
            {movieList.map((item,index)=>(
                <MovieCard movie={item}/>
            ))}
        </div>
    )
}

export default MovieList
