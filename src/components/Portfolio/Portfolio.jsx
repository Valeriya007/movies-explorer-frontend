import { Link } from 'react-router-dom';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav className="portfolio__nav">
        <ul className="portfolio__links">
          <li className="portfolio__links-item">
            <Link to={"https://github.com/Valeriya007/how-to-learn"}
              className="portfolio__link"
              target="_blank">
              Статичный сайт
              <button className="portfolio__link-btn" type="button"></button>
            </Link>
          </li>
          <li className="portfolio__links-item">
            <Link to={"https://github.com/Valeriya007/russian-travel"}
              className="portfolio__link"
              target="_blank">
              Адаптивный сайт
              <button className="portfolio__link-btn" type="button"></button>
            </Link>
          </li>
          <li className="portfolio__links-item">
            <Link to={"https://github.com/Valeriya007/react-mesto-auth"}
              className="portfolio__link"
              target="_blank">
              Одностраничное приложение
              <button className="portfolio__link-btn" type="button"></button>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}