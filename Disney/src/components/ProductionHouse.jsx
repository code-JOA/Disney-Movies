import React from 'react'
import disney from "./../assets/Images/disney.png";
import marvel from "./../assets/Images/marvel.png";
import nationalG from "./../assets/Images/nationalG.png";
import pixar from "./../assets/Images/pixar.png";
import starwar from "./../assets/Images/starwar.png";
import starwarV from "./../assets/Videos/star-wars.mp4";
import disneyV from "./../assets/Videos/disney.mp4";
import marvelV from "./../assets/Videos/marvel.mp4";
import nationalGeographicV from "./../assets/Videos/national-geographic.mp4";
import pixarV from "./../assets/Videos/pixar.mp4";

function ProductionHouse() {
    const list=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image: pixar,
            video: pixarV
        },
        {
            id:3,
        },
        {

        },
        {
            id:5,
            image: nationalG,
            video: nationalGeographicV
        }
    ]
  return (
    <div>
        {productionHouseList.map((item)=>(
            
        ))}
    </div>
  )
}

export default ProductionHouse