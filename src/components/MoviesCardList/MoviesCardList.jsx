import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { movies, saveMovies } from '../../utils/constants';
import { useLocation } from 'react-router-dom';


export default function MoviesCardList() {
  const { pathname } = useLocation();

  return pathname === "/movies" ? (
    <section className="movies">
      <ul className="movies__grid">
        {movies.map((movie) => (
          <MoviesCard
              key={movie.id}
              name={movie.name}
              src={movie.image}
              trailerLink={movie.trailerLink}
              duration={movie.duration}
            />
          ))
        }
      </ul>
      <button className="movies__more-btn" type="button">
        Ещё
      </button>
    </section>
  ) : (
      (pathname === "/saved-movies",
        (
        <section className="saved-movies">
          <ul className="movies__grid">
            {saveMovies.map((movie) => (
              <MoviesCard
                key={movie.id}
                name={movie.name}
                src={movie.image}
                trailerLink={movie.trailerLink}
                duration={movie.duration}
              />
            ))
            }
          </ul>
        </section>
      ))
  )
}
