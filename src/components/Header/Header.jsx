import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';


export default function Header({ name, loggedIn }) {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  function handelClick() {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  };

  function onLink() {
    setIsOpen(false)
  };

  useEffect(() => {
    function closeBurger() {
      if (document.documentElement.clientWidth > '767') {
        setIsOpen(false)
        window.removeEventListener('resize', closeBurger)
      }
    }
    if (isOpen) {
      window.addEventListener('resize', closeBurger)
      return () => window.removeEventListener('resize', closeBurger)
    }
  }, [isOpen])


  return (
    <header className={`header ${name !== 'home' ? 'header__page' : ''}`}>
      <div className="header__logo">
        <Link to={'/'}
          className="header__logo-link">
        </Link>
      </div>
      {name === 'home' && !loggedIn ?
        <nav className='header__nav'>
          <ul className='header__links-container'>
            <li>
              <Link to={'/signup'}
                className="header__signup">Регистрация</Link>
            </li>
            <li>
              <Link to={'/signin'}
                className="header__signin">Войти</Link>
            </li>
          </ul>
        </nav>
        :
        <>
          <nav className={`header__nav_type_page ${isOpen ? 'header__nav_open' : ''}`}>
            <ul className='header__links-container header__links-container_type_page'>
              <li className='header__link-container'>
                <Link to={'/'}
                  className={`header__link ${pathname === '/' ? 'header__link_active' : ''}`}
                  onClick={onLink}
                >Главная
                </Link>
              </li>
              <li className='header__link-container'>
                <Link to={'/movies'}
                  className={`header__link ${pathname === '/movies' ? 'header__link_active' : ''}`}
                  onClick={onLink}
                >Фильмы
                </Link>
              </li>
              <li className='header__link-container'>
                <Link to={'/saved-movies'}
                  className={`header__link ${pathname === '/saved-movies' ? 'header__link_active' : ''}`}
                  onClick={onLink}
                >Сохранённые фильмы
                </Link>
              </li>
              <li className='header__link-container'>
                <Link to={'/profile'}
                  className={`header__link header__link_type_accaunt ${pathname === '/profile' ? 'header__link_active' : ''}`}
                  onClick={onLink}
                >Аккаунт <div className='header__accaunt-icon'></div>
                </Link>
              </li>
            </ul>
            <button
              className='header__burger-close'
              type='button'
              onClick={handelClick}>
            </button>
          </nav>
          <button
            className='header__burger'
            type='button'
            onClick={handelClick}>
          </button>
        </>
      }
    </header>
  )
}
