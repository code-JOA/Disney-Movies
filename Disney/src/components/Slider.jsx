import React, { useEffect } from "react"
import GlobalApi from '../Services/GlobalApi'

function Slider() {
    useEffect(()=>{

},[])

const getTrendingMovies=()=>{
    GlobalApi.getTrendingMovies.then(resp=>{
        console.log(rep);

    })
}
  return (
    <div>Slider</div>
  )
}

export default Slider