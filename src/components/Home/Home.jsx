import { Fragment, useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../apis/movieApi';
import { APIKEY } from '../../apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  )
}

export default Home;
