import React, { useEffect } from "react";
import GlobalApi from '../Services/GlobalApi';

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
    <div>Slider</div>
  )
}

export default Slider