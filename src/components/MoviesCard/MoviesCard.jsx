import { Link, useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { useEffect, useState } from 'react';


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
      setClick(savedMovies.some(item => data.id === item.movieId))
  }, [savedMovies, data.id, setClick, pathname])

  function onClick() {
    if (savedMovies.some(item => data.id === item.movieId)) {
      setClick(true)
      addMovie(data)
    } else {
      setClick(false)
      addMovie(data)
    }
  }

  function time(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return (
      hours === 0 ? `${minutes}м`
        : minutes === 0 ? `${hours}ч`
        : `${hours}ч${minutes}м`)
  }

  return (
    <li className="movies__card">
      <article className="movies__card-item">
        <div className="movie__info">
          <h2 className="movie__title">{data.nameRU}</h2>
          <span className="movie__duration">{time(data.duration)}</span>
        </div>
        <Link to={data.trailerLink}
          className="movie__link"
          target="_blank">
          <img
            className="movie__image"
            src={pathname === '/movies' ? `https://api.nomoreparties.co${data.image.url}` : data.image}
            alt={data.name}
          />
        </Link>
        {pathname === '/movies' ?
          <button
            type="button"
            className={`movie__btn-save ${click ? 'movie__btn-save_active' : ''}`}
            onClick={onClick}>
            {click ? '' : 'Сохранить'}
          </button>
            :
          <button
            type="button"
            className="movie__btn-delete"
            onClick={() => onDelete(data._id)}>
          </button>
        }
        </article>
    </li>
  )
}
