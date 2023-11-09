import './SearchForm.css';
import { useState } from 'react';

export default function SearchForm() {
  const [isActive, setIsActive] = useState(false);

  function changeState() {
    setIsActive(prevState => !prevState)
  };

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <input
            className="search__input"
            type="text"
            name="search__input"
            placeholder="Фильм"
            required
          />
          <button className="search__button" type="submit">
            Поиск
          </button>
        </form>
        <div className="search__checkbox">
          <button
            className={`search__tumb ${isActive ? 'search__tumb': 'search__tumb-disabled'}`}
            type="button"
            onClick={changeState}>
          </button>
          <p className="search__text">Короткометражки</p>
        </div>
      </div>
    </section>
  )
}
