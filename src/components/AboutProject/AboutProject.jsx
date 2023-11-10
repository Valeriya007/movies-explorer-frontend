import './AboutProject.css';


export default function AboutProject() {
  return (
    <section className="about" id={"about"}>
      <h2 className="about__title">О проекте</h2>
      <div className="about__conteiner">
				<h3 className="about__conteiner-title">Дипломный проект включал 5 этапов</h3>
				<h3 className="about__conteiner-title">На выполнение диплома ушло 5 недель</h3>
				<p className="about__conteiner-subtitle">
					Составление плана, работу над бэкендом, вёрстку, добавление
					функциональности и финальные доработки.
				</p>
				<p className="about__conteiner-subtitle">
					У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
					соблюдать, чтобы успешно защититься.
				</p>
			</div>
			<div className="about__status">
				<p className="about__status-level">1 неделя</p>
				<p className="about__status-level">4 недели</p>
				<span className="about__status-dev">Back-end</span>
				<span className="about__status-dev">Front-end</span>
			</div>
    </section>
  )
}
