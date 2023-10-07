import { Fragment, useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../apis/movieApi';
import { APIKEY } from '../../apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';
const Home = () => {

  const dispatch = useDispatch();
  const movieText = "Harry";

  useEffect(() => {
    const fetchMovies = async() => {
      const response = await movieApi
      .get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("Error: ", err.message);
      });
      dispatch(addMovies(response.data))
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
