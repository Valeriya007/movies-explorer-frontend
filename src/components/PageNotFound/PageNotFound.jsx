import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

export default function PageNotFound() {
  const navigate = useNavigate();
  
  return (
    <main className="error">
      <section className="error__container">
        <h1 className="error__title">404</h1>
        <p className="error__subtitle">Страница не найдена</p>
        <button
          className="error__btn"
          type="button"
          onClick={() => navigate(-1)}
        >
          Назад
        </button>
      </section>
    </main>
  )
}
