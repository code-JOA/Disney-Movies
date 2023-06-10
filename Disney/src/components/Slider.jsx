import React, { useEffect } from "react"
import GlobalApi from '../Services/Global'

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