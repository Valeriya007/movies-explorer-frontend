import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__data">©&nbsp; 2023</p>
        <nav className="footer__nav">
          <Link to={"https://practicum.yandex.ru/"}
            className="footer__link"
            target="_blank">
            Яндекс.Практикум
          </Link>
          <Link to={"https://github.com/Valeriya007/"}
            className="footer__link"
            target="_blank">
            Github
          </Link>
        </nav>
      </div>
    </footer>
  )
}