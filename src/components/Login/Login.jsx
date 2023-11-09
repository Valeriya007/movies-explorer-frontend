import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  return (
    <section className="login">
      <div className="login__logo">
        <Link to={'/'} className="login__logo-link"></Link>
      </div>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form" >
        <fieldset className="login__field">
          <label className="login__label">E-mail</label>
          <input
            className="login__input"
            type="text"
            placeholder="pochta@yandex.ru|"
            minLength="3"
            required=""
				  />
        </fieldset>
        <fieldset className="login__field">
          <label className="login__label">Пароль</label>
          <input
            className="login__input"
            type="text"
            placeholder="••••••••"
            required=""
				  />
        </fieldset>
        <button className="login__btn" type="submit">
          Войти
        </button>
			</form>
			<p className="login__text">
				Ещё не зарегистрированы?
				<Link to={"/signup"} className="login__text-link">
				  Регистрация
				</Link>
			</p>
    </section>
  )
}
