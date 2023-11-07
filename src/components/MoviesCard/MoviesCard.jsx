import { Link, useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { useState } from 'react';


export default function MoviesCard({ name, src, duration, trailerLink }) {
  const { pathname } = useLocation();
  const [click, setClick] = useState(false);

  function onClick() {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  return pathname === "/movies" ? (
    <li className="movies__card">
      <article className="movies__card-item">
        <div className="movie__info">
          <h2 className="movie__title">{name}</h2>
          <span className="movie__duration">{duration}</span>
        </div>
        <Link to={trailerLink}
          className="movie__link"
          target="_blank">
          <img
            className="movie__image"
            src={src}
            alt={name}
          />
        </Link>

        {click
          ? (
            <button className="movie__btn-save_active" onClick={onClick}></button>
          ) : (
            <button className="movie__btn-save" onClick={onClick}>Сохранить</button>
          )
        }
      </article>
    </li>
  ) : (
      (pathname === "/saved-movies",
        (
        <li className="movies__card">
      <article className="movies__card-item">
        <div className="movie__info">
          <h2 className="movie__title">{name}</h2>
          <span className="movie__duration">{duration}</span>
        </div>
        <Link to={trailerLink}
          className="movie__link"
          target="_blank">
          <img
            className="movie__image"
            src={src}
            alt={name}
          />
        </Link>
        <button
              className="movie__btn-delete"
              onClick={onClick}
            ></button>
      </article>
        </li>
    ))
  )
}
