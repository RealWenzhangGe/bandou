import React, { useState, useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=181f1625';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title: string) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();

    //console.log(data.Search);
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Fight Club');
  }, []);

  return (
    <div className='app'>
      <h1>Bandou Movie</h1>
      <h3>Any Movie You Want</h3>

      <div className='search'>
        <input 
        placeholder='Press Enter to Search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' ? searchMovies(searchTerm) : null}
        />
        <img 
        src={SearchIcon}
        alt='Search' 
        onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies.length > 0 ? (
          <div className='container'>
            {
              movies.map( (movie: any) => {
                return <MovieCard 
                poster={movie.Poster}
                title={movie.Title}
                type={movie.Type}
                year={movie.Year}
                imdbID={movie.imdbID}
                />
              })
            }
          </div>
          ) : (
          <div className='empty'>
            <h2>404 not found</h2>
          </div>
          )}
    </div>
  );
}

export default App;
