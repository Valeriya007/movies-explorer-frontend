import './AboutProject.css';


export default function AboutProject() {
  return (
    <section className="about" id={"about"}>
      <h2 className="about__title">О проекте</h2>
      <div className="about__content">
        <h3 className="about__content-title">
          Дипломный проект включал 5 этапов
        </h3>
        <h3 className="about__content-title">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about__content-subtitle">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="about__content-subtitle">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about__status">
        <h4 className="about__level">1 неделя</h4>
        <h4 className="about__level">4 недели</h4>
        <p className="about__dev">Back-end</p>
        <p className="about__dev">Front-end</p>
      </div>
    </section>
  )
}