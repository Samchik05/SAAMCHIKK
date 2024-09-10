import "./Module.projects.scss"
import GoTrip from "../../../src/assets/images/GoTrip.png";
import Cinema from "../../../src/assets/images/cinema.png";
import Nike from "../../../src/assets/images/nike.png";
import Grayson from "../../../src/assets/images/grayson.png";

const Projects = () => {
  return (
    <>
    <main className="section" id='projects'>
			<div className="container">
				<h2 className="title-1">Projects</h2>
        <div className="projects">
        <ul className="projects">
					<a href="https://samchik05.github.io/GoTrip/">
            <li className="project">
              <img src={GoTrip} alt="GoTrip" className="project__img" />
              <h3 className="project__title">GoTrip</h3>
            </li>
          </a>
				</ul>
				<ul className="projects">
					<a href="https://samchik05.github.io/Grayson/">
            <li className="project">
              <img src={Grayson} alt="Grayson" className="project__img" />
              <h3 className="project__title">Grayson
              </h3>
            </li>
          </a>
				</ul>
				<ul className="projects">
					<a href="https://samchik05.github.io/cinema/">
            <li className="project">
              <img src={Cinema} alt="Chinema" className="project__img" />
              <h3 className="project__title">Cinema</h3>
            </li>
          </a>
				</ul>
				<ul className="projects">
					<a href="https://samchik05.github.io/nike/">
            <li className="project">
              <img src={Nike} alt="Nike" className="project__img" />
              <h3 className="project__title">Nike</h3>
            </li>
          </a>
				</ul>
				<ul className="projects">
					<a href="https://github.com/Samchik05/GoTrip">
            <li className="project">
              <img src={GoTrip} alt="GoTrip" className="project__img" />
              <h3 className="project__title">GoTrip</h3>
            </li>
          </a>
				</ul>
				<ul className="projects">
					<a href="https://github.com/Samchik05/GoTrip">
            <li className="project">
              <img src={GoTrip} alt="GoTrip" className="project__img" />
              <h3 className="project__title">GoTrip</h3>
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