import React from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/movie/:imdbID' element={<MovieDetails />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
