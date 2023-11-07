import './Profile.css';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
      <section className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form" >
          <fieldset className="profile__field">
            <label className="profile__label">Имя</label>
            <input
               className="profile__input"
              type="text"
              placeholder="Виталий"
					     minLength="3"
				    />
          </fieldset>
          <fieldset className="profile__field">
            <label className="profile__label">E-mail</label>
            <input
               className="profile__input"
              type="text"
              placeholder="pochta@yandex.ru"
				    />
          </fieldset>
          <button className="profile__btn" type="submit">
            Редактировать
          </button>
			  </form>
			  <Link to={"/"} className="profile__link">
				Выйти из аккаунта
			  </Link>
		  </section>
  )
}
