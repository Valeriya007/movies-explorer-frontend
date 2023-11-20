import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <section className='error'>
      <div className='error__container'>
        <h2 className='error__title'>404</h2>
        <p className='error__text'>Страница не найдена</p>
        <button
          className="error__btn"
          type="button"
          onClick={() => navigate(-1)}
        >
          Назад
        </button>
      </div>
    </section>
  )
}
