import React, { useEffect } from "react";
import GlobalApi from '../Services/GlobalApi';

const IMAGE_BASE_URL='https://image.tmdb.org/t/p/orignal'

function Slider() {
    const [movieList, setMovieList]=useState([]);
    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList()
        })
    }
  return (
    <div>
        {movieList.map((item,index)=>{
            <img src={} />
        })}
    </div>
  )
}

export default Slider