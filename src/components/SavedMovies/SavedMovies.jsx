import { useCallback, useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { ShortDuration } from '../../utils/constants';

export default function SavedMovies({
  savedMovie,
  onDelete,
  setIsError
}) {

  const [filterMovies, setFilterMovies] = useState(savedMovie);
  const [searchedMovie, setSearchedMovie] = useState('');
  const [firstEnter, setFirstEnter] = useState(true);
  const [isCheck, setIsCheck] = useState(false);


  const filter = useCallback((search, isCheck, movies) => {
    setSearchedMovie(search)
    setFilterMovies(movies.filter((movie) => {
      const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
      return isCheck ? (searchName && movie.duration <= ShortDuration) : searchName
    }))
  }, [])

  function searchMovies(search) {
    setFirstEnter(false)
    filter(search, isCheck, savedMovie)
  }

  useEffect(() => {
    if (savedMovie.length === 0) {
      setFirstEnter(true)
    } else {
      setFirstEnter(false)
    }
    filter(searchedMovie, isCheck, savedMovie)
  }, [filter, searchedMovie, isCheck, savedMovie])

  return (
    <>
      <SearchForm
        isCheck={isCheck}
        setIsCheck={setIsCheck}
        movies={savedMovie}
        savedMovie={savedMovie}
        filter={filter}
        searchedMovie={searchedMovie}
        searchMovies={searchMovies}
        setIsError={setIsError}
        firstEnter={firstEnter}
      />
      <MoviesCardList
        movies={filterMovies}
        onDelete={onDelete}
        firstEnter={firstEnter}
      />
    </>
  )
}
