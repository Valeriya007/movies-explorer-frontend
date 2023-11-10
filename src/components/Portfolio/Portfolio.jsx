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
              <p className='portfolio__link-subtitle'>Статичный сайт</p>
              <button className="portfolio__link-btn" type="button"></button>
            </Link>
          </li>
          <li className="portfolio__links-item">
            <Link to={"https://github.com/Valeriya007/russian-travel"}
              className="portfolio__link"
              target="_blank">
              <p className='portfolio__link-subtitle'>Адаптивный сайт</p>
              <button className="portfolio__link-btn" type="button"></button>
            </Link>
          </li>
          <li className="portfolio__links-item">
            <Link to={"https://github.com/Valeriya007/react-mesto-auth"}
              className="portfolio__link"
              target="_blank">
              <p className='portfolio__link-subtitle'>Одностраничное приложение</p>
              <button className="portfolio__link-btn" type="button"></button>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}
