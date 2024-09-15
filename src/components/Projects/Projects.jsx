import s from "./Project.module.scss"
import gotrip from "../../../src/theme/images/gotrip.png";
import cinema from "../../../src/theme/images/cinema.png";
import nike from "../../../src/theme/images/nike.png";
import grayson from "../../../src/theme/images/grayson.png";
import oku from "../../../src/theme/images/oku.png";
import totembo from "../../../src/theme/images/totembo.png";

const Projects = () => {
  return (
    <>
    <main className="section" id='projects'>
			<div className="container">
				<h2 className="title-1">Projects</h2>
        <div className={s.projects}>
        <ul className={s.projects}>
					<a href="https://samchik05.github.io/GoTrip/">
            <li className={s.project}>
              <img src={gotrip} alt="GoTrip" className={s.project__img} />
              <h3 className={s.project__title}>GoTrip</h3>
            </li>
          </a>
				</ul>
				<ul className={s.projects}>
					<a href="https://samchik05.github.io/Grayson/">
            <li className={s.project}>
              <img src={grayson} alt="Grayson" className={s.project__img} />
              <h3 className={s.project__title}>Grayson
              </h3>
            </li>
          </a>
				</ul>
				<ul className={s.projects}>
					<a href="https://samchik05.github.io/cinema/">
            <li className={s.project}>
              <img src={cinema} alt="Chinema" className={s.project__img} />
              <h3 className={s.project__title}>Cinema</h3>
            </li>
          </a>
				</ul>
				<ul className={s.projects}>
					<a href="https://samchik05.github.io/nike/">
            <li className={s.project}>
              <img src={nike} alt="Nike" className={s.project__img} />
              <h3 className={s.project__title}>Nike</h3>
            </li>
          </a>
				</ul>
				<ul className={s.projects}>
					<a href="https://samchik05.github.io/Oku/">
            <li className={s.project}>
              <img src={oku} alt="Oku" className={s.project__img} />
              <h3 className={s.project__title}>Oku</h3>
            </li>
          </a>
				</ul>
				<ul className={s.projects}>
					<a href="https://samchik05.github.io/TOTEMBO/">
            <li className={s.project}>
              <img src={totembo} alt="Totembo" className={s.project__img} />
              <h3 className={s.project__title}>Totembo</h3>
            </li>
          </a>
				</ul>
        </div>
				
			</div>
		</main>
    </>
  )
}

export default Projects