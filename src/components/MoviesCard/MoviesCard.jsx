import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MoviesCard.css';

export default function MoviesCard({
  data,
  savedMovies,
  addMovie,
  onDelete
}) {
  const { pathname } = useLocation();
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (pathname === '/movies')
      setClick(savedMovies.some(element => data.id === element.movieId))
  }, [savedMovies, data.id, setClick, pathname])

  function onClick() {
    if (savedMovies.some(element => data.id === element.movieId)) {
      setClick(true)
      addMovie(data)
    } else {
      setClick(false)
      addMovie(data)
    }
  }

  function convertTime(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return (hours === 0 ? `${minutes}м` : minutes === 0 ? `${hours}ч` : `${hours}ч${minutes}м`)
  }

  return pathname === "/movies" ? (
    <li className='movies__card'>
      <article className="movies__card-item">
        <div className="movie__info">
          <h2 className="movie__title">{data.nameRU}</h2>
          <span className="movie__duration">{convertTime(data.duration)}</span>
        </div>
        <Link to={data.trailerLink} target='_blank'>
          <img
            src={pathname === '/movies' ? `https://api.nomoreparties.co${data.image.url}` : data.image}
            alt={data.name}
            className='movie__image' />
        </Link>
        {click
          ? (
            <button
              className="movie__btn-save_active"
              type='button'
              onClick={onClick}>
            </button>
          ): (
            <button
              className="movie__btn-save"
              type='button'
              onClick={onClick}>
              Сохранить
            </button>
          )
        }
      </article>
    </li>
     ) : (
      (pathname === "/saved-movies",
        (
    <li className='movies__card'>
      <article className="movies__card-item">
        <div className="movie__info">
          <h2 className="movie__title">{data.nameRU}</h2>
          <span className="movie__duration">{convertTime(data.duration)}</span>
        </div>
        <Link to={data.trailerLink}
          className="movie__link"
          target='_blank'>
          <img
            className="movie__image"
            src={pathname === '/movies' ? `https://api.nomoreparties.co${data.image.url}` : data.image}
            alt={data.name}
          />
        </Link>
            <button
              className="movie__btn-delete"
              type='button'
              onClick={() => onDelete(data._id)}>
            </button>
      </article>
    </li>
      ))
     )
}
