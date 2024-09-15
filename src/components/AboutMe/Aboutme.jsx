import s from "./Aboutme.module.scss"
import Menu from "../../../src/assets/images/me.jpg";

const Aboutme = () => {

  return (
    <>
    <main className="section" id='aboutme'>
        <div className="container">
        <h1 className="title-1">About Me</h1>
          <div className={s.about}>
           <li className={s.aboutme}>
              <img src={Menu} alt="Selvin Aronov" className={s.aboutme__img}/>
            </li>
             <div className={s.about2}>
             <h1 className={s.aboutme__title}>Name: <em>Selvin</em></h1>
             <h1 className={s.aboutme__title}>Last Name: <em>Aronov</em></h1>
             <h1 className={s.aboutme__title}>Age: <em>19</em></h1>
             <h1 className={s.aboutme__title}>Address: <em>Uzbekistan,Tashkent</em></h1>
             <h1 className={s.aboutme__title}>Language: <em>Russian</em></h1>
            
            </div>
          </div>
         
        </div>
    </main>
    </>
  )
}

export default Aboutme