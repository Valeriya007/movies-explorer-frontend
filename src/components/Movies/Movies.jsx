import { useCallback, useState, useEffect } from 'react';
import "./Movies.css";
import apiMovies from '../../utils/MoviesApi.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';

export default function Movies({
  savedMovies,
  addMovie,
  setIsError
}) {
  const [allMovies, setAllMovies] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState('');
  const [filterMovies, setFilterMovies] = useState([]);
  const [isCheck, setIsCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [firstEnter, setFirstEnter] = useState(true);

  const filter = useCallback((search, isCheck, movies) => {
    setSearchedMovie(search)
    localStorage.setItem('movie', JSON.stringify(search))
    localStorage.setItem('shorts', JSON.stringify(isCheck))
    localStorage.setItem('allmovies', JSON.stringify(movies))

    setFilterMovies(movies.filter((movie) => {
      const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
      return isCheck ? (searchName && movie.duration <= 40) : searchName
    }))
  }, [])


  function searchMovies(search) {
    if (allMovies.length === 0) {
      setIsLoading(true)
      apiMovies.getMovies()
        .then((res) => {
          setAllMovies(res)
          setIsCheck(false)
          setServerError(false)
          setFirstEnter(false)
          filter(search, isCheck, res)
        })
        .catch((err) => {
          setServerError(true)
          console.error(`Ошибка поиска фильма ${err}`)
        })
        .finally(() => setIsLoading(false))
    } else {
      filter(search, isCheck, allMovies)
    }
  }
  useEffect(() => {
    if (localStorage.allmovies && localStorage.shorts && localStorage.movie) {
      const movies = JSON.parse(localStorage.allmovies)
      const search = JSON.parse(localStorage.movie)
      const isCheck = JSON.parse(localStorage.shorts)
      setServerError(false)
      setFirstEnter(false)
      setSearchedMovie(search)
      setIsCheck(isCheck)
      setAllMovies(movies)
      filter(search, isCheck, movies)
    }
  }, [filter])

  return (
    <>
      <SearchForm
        movies={allMovies}
        filter={filter}
        isCheck={isCheck}
        setIsCheck={setIsCheck}
        searchedMovie={searchedMovie}
        searchMovies={searchMovies}
        setIsError={setIsError}
        firstEnter={firstEnter}
      />
      <MoviesCardList
        movies={filterMovies}
        savedMovies={savedMovies}
        addMovie={addMovie}
        isLoading={isLoading}
        serverError={serverError}
        firstEnter={firstEnter}
      />
    </>
  )
}
