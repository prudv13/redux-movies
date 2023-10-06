import { Fragment, useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../apis/movieApi';
import { APIKEY } from '../../apis/MovieApiKey';
const Home = () => {

  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async() => {
      const response = await movieApi
      .get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("Error: ", err.message);
      });
      console.log("The response from API ", response);
    }

    fetchMovies();
  }, []);
  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  )
}

export default Home;
