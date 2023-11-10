import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
  return (
    <section className="register">
      <div className="register__logo">
        <Link to={'/'} className="register__logo-link"></Link>
      </div>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form" >
        <fieldset className="register__field">
          <label className="register__label">Имя</label>
          <input
            className="register__input"
            type="text"
            placeholder="Виталий"
            minLength="3"
            required=""
				  />
        </fieldset>
        <fieldset className="register__field">
          <label className="register__label">E-mail</label>
          <input
            className="register__input"
            type="text"
            placeholder="pochta@yandex.ru|"
            required=""
				  />
        </fieldset>
        <fieldset className="register__field">
          <label className="register__label">Пароль</label>
          <input
            className="register__input"
            type="text"
            placeholder="••••••••"
					  required=""
				    />
        </fieldset>
        <span className="register__error">Что-то пошло не так...</span>
        <button className="register__btn" type="submit">
          Зарегистрироваться
        </button>
			</form>
			<p className="register__text">
				Уже зарегистрированы?
				<Link to={"/signin"} className="register__text-link">
				  Войти
				</Link>
			</p>
    </section>
  )
}
