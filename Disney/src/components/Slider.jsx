import React, { useEffect } from "react";
import GlobalApi from '../Services/GlobalApi';

function Slider() {
    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(rep);
        })
    }
  return 
    <div>Slider</div>
  )
}

export default Slider