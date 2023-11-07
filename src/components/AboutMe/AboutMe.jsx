import { Link } from 'react-router-dom';
import './AboutMe.css';
import photo from '../../images/profile.png';

export default function AboutMe() {
  return (<section className="aboutme">
    <h2 className="aboutme__title">Студент</h2>
    <div className="aboutme__container">
      <div className="aboutme__content">
        <h3 className="aboutme__name">Виталий</h3>
        <p className="aboutme__profile">Фронтенд-разработчик, 30 лет</p>
        <p className="aboutme__text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно
          начал кодить. С 2015 года работал в компании «СКБ Контур». После того,
          как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
          ушёл с постоянной работы.
        </p>
        <Link to={"https://github.com/Valeriya007/"}
          className="aboutme__link"
          target="_blank">
          Github
        </Link>
      </div>
      <img className="aboutme__photo" src={photo} alt="#" />
    </div>
  </section>
  )
}
