import s from "./Skills.module.scss"

const Skills = () => {
  return (
    <>
    <section className="section" id="skills">
        <div className="container">
            <div className={s.section__title}>
                <h3 className="title-1">Skills</h3>
                <p>Why Choose Me</p>
                <h2>My Experience Area</h2>
            </div>
            <div className={s.experience__item}>
                <div className={s.experience__info}>
                    <p>HTML</p>
                    <p>85%</p>
                </div>
                <div className={s.progress__line} data-percent="90%">
                    <span style={{width: "85%"}}></span>
                </div>
            </div>
            <div className={s.experience__item}>
                <div className={s.experience__info}>
                    <p>CSS</p>
                    <p>75%</p>
                </div>
                <div className={s.progress__line} data-percent="90%">
                    <span style={{width: "75%"}}></span>
                </div>
            </div>
            <div className={s.experience__item}>
                <div className={s.experience__info}>
                    <p>JAVA SCRIPT</p>
                    <p>70%</p>
                </div>
                <div className={s.progress__line} data-percent="90%">
                    <span style={{width: "70%"}}></span>
                </div>
            </div>
            <div className={s.experience__item}>
                <div className={s.experience__info}>
                    <p>VUE</p>
                    <p>75%</p>
                </div>
                <div className={s.progress__line} data-percent="90%">
                    <span style={{width: "75%"}}></span>
                </div>
            </div>
            <div className={s.experience__item}>
                <div className={s.experience__info}>
                    <p>VUEX</p>
                    <p>70%</p>
                </div>
                <div className={s.progress__line} data-percent="90%">
                    <span style={{width: "70%"}}></span>
                </div>
            </div>
            <div className={s.experience__item}>
                <div className={s.experience__info}>
                    <p>SCSS</p>
                    <p>85%</p>
                </div>
                <div className={s.progress__line} data-percent="90%">
                    <span style={{width: "85%"}}></span>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Skills