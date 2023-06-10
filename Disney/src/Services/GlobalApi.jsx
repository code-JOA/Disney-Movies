import axios from 'axios';

const movieBaseUrl ='https://api.themoviedb.org/3'
const api_key = "de0b39d4bd85599f2e0dbce743bb0857"

// // https://api.themoviedb.org/3/trending/all/day?api_key=de0b39d4bd85599f2e0dbce743bb0857
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=de0b39d4bd85599f2e0dbce743bb0857";

const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?"+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)


export default{
    getTrendingVideos,
    getMovieByGenreId
}

// import axios from "axios";

// const movieBaseUrl="https://api.themoviedb.org/3"
// const api_key='de0b39d4bd85599f2e0dbce743bb0857'

// const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=de0b39d4bd85599f2e0dbce743bb0857';

// //https://api.themoviedb.org/3/trending/all/day?api_key=de0b39d4bd85599f2e0dbce743bb0857
// const getTrendingVideos=axios.get(movieBaseUrl+
//     "/trending/all/day?api_key="+api_key);
//     const getMovieByGenreId=(id)=>
//     axios.get(movieByGenreBaseURL+"&with_genres="+id)

// export default{
//     getTrendingVideos,
//     getMovieByGenreId
// }