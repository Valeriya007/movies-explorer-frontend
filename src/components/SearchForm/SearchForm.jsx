import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';
import useFormValidation from '../../utils/useFormValidation';
import ErrorContext from '../../contexts/ErrorContext';

export default function SearchForm({
  movies,
  filter,
  savedMovie,
  searchMovies,
  searchedMovie,
  isCheck,
  setIsCheck,
  setIsError,
  firstEnter
}) {
  const { pathname } = useLocation();
  const { values, handleChange, reset } = useFormValidation();
  const isError = useContext(ErrorContext);

  useEffect(() => {
    if ((pathname === '/saved-movies' && savedMovie.length === 0)) {
      reset({ search: '' })
    } else {
      reset({ search: searchedMovie })
    }
    setIsError(false)
  }, [savedMovie, searchedMovie, pathname, reset, setIsError])

  function onSubmit(evt) {
    evt.preventDefault()
    if (evt.target.search.value) {
      searchMovies(evt.target.search.value)
      setIsError(false)
    } else {
      setIsError(true)
    }
  }

  function changeCheck() {
    if (isCheck) {
      setIsCheck(false)
      filter(values.search, false, movies)
    } else {
      setIsCheck(true)
      filter(values.search, true, movies)
    }
  }

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form"
          name={'SearchForm'}
          onSubmit={onSubmit}
          noValidate>
          <input
            className="search__input"
            name='search'
            type="text"
            placeholder='Фильм'
            required
            value={values.search || ''}
            disabled={savedMovie ? (savedMovie.length === 0 && true) : false}
            onChange={(evt) => {
              handleChange(evt)
              setIsError(false)
            }}
          />
          <button type='submit' className='search__button'>Поиск</button>
        </form>
        <span
          className={`search__error ${isError && 'search__error_active'}`}>
          {'Введите ключевое слово'}
        </span>
        <div className="search__checkbox">
          <label className="search__checkbox-label">
              <input
                className="search__checkbox-input"
                type="checkbox"
                name="checkbox"
                id="checkbox"
                checked={isCheck}
                disabled = {firstEnter}
                onChange={() => changeCheck()
                }
              />
              <span className="search__checkbox-span input-focus"/>
              <span className="search__checkbox-caption">Короткометражки</span>
          </label>
        </div>
      </div>
    </section>
  )
}
