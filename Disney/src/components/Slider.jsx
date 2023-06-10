import React, { useEffect } from "react"
import GlobalApi from '../Services/GlobalApi'

function Slider() {
    useEffect(()=>{

},[])

const getTrendingMovies=()=>{
    GlobalApi.getTrending.then(resp=>{
        console.log(rep);

    })
}
  return (
    <div>Slider</div>
  )
}

export default Slider