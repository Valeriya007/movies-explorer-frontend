import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

import {
  MaxScreen,
  MediumScreen,
  SmallScreen,
  InitMoreMaxScreen,
  InitLessMaxScreen,
  InitMediumScreen,
  InitSmallScreen,
  StepMaxScreen,
  StepMediumScreen,
  StepSmallScreen
} from '../../utils/constants';

export default function MoviesCardList({
  movies,
  savedMovies,
  addMovie,
  onDelete,
  firstEnter,
  isLoading,
  serverError
}) {
  const { pathname } = useLocation();
  const [count, setCount] = useState('');
  const fact = movies.slice(0, count);

  function printMovies() {
    const counter = { init: InitMoreMaxScreen, step: StepMaxScreen }
    if (window.innerWidth < MaxScreen) {
      counter.init = InitLessMaxScreen
      counter.step = StepMediumScreen
    }
    if (window.innerWidth < MediumScreen) {
      counter.init = InitMediumScreen
      counter.step = StepSmallScreen
    }
    if (window.innerWidth < SmallScreen) {
      counter.init = InitSmallScreen
      counter.step = StepSmallScreen
    }
    return counter
  }

  useEffect(() => {
    if (pathname === '/movies') {
      setCount(printMovies().init)
      function printMoviesForResize() {
        if (window.innerWidth >= StepMaxScreen) {
          setCount(printMovies().init)
        }
        if (window.innerWidth < StepMaxScreen) {
          setCount(printMovies().init)
        }
        if (window.innerWidth < MediumScreen) {
          setCount(printMovies().init)
        }
        if (window.innerWidth < SmallScreen) {
          setCount(printMovies().init)
        }
      }
      window.addEventListener('resize', printMoviesForResize)
      return () => window.removeEventListener('resize', printMoviesForResize)
    }
  }, [pathname, movies])

  function clickMore() {
    setCount(count + printMovies().step)
  }

  return (
    <section className="movies">
      <ul className="movies__grid">
        {isLoading ? <Preloader /> :
          (pathname === "/movies" && fact.length !== 0) ?
            fact.map(data => {
              return (
                <MoviesCard
                  key={data.id}
                  data={data}
                  savedMovies={savedMovies}
                  addMovie={addMovie}
                />
              )
            }) : movies.length !== 0 ?
              movies.map(data => {
                return (
                  <MoviesCard
                    key={data._id}
                    data={data}
                    onDelete={onDelete}
                  />
                )
              })
              :
              serverError ?
                <span className="movies__serch-error">
                  Во время запроса произошла ошибка.
                  Возможно, проблема с соединением или сервер недоступен.
                  Подождите немного и попробуйте ещё раз
                </span>
                : !firstEnter ?
                <span className="movies__serch-error">Ничего не найдено</span>
                : pathname === '/movies' ?
                <span className="movies__serch-error">Начните поиск фильмов</span>
                :
                <span className="movies__serch-error">Нет сохранённых фильмов</span>
          }
      </ul>
      {pathname === '/movies' &&
        <button
          className={`movies__more-btn ${count >= movies.length
            && 'movies__more-btn_hidden'}`}
          type="button"
          onClick={clickMore}>
          Ёще
        </button>}
    </section>

  )
}
