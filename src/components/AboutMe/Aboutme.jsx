import "./Module.aboutme.scss"
import Menu from "../../../src/assets/images/me.jpg";

const Aboutme = () => {

  return (
    <>
    <main className="section" id='aboutme'>
        <div className="container">
        <h1 className="title-1">About Me</h1>
          <div className="about">
           <li className="aboutme">
              <img src={Menu} alt="Selvin Aronov" className="aboutme__img" />
            </li>
             <div className="about2">
             <h1 className="aboutme__title">Name: <em>Selvin</em></h1>
             <h1 className="aboutme__title">Last Name: <em>Aronov</em></h1>
             <h1 className="aboutme__title">Age: <em>19</em></h1>
             <h1 className="aboutme__title">Address: <em>Uzbekistan,Tashkent</em></h1>
             <h1 className="aboutme__title">Language: <em>Russian</em></h1>
            
            </div>
          </div>
         
        </div>
    </main>
    </>
  )
}

export default Aboutme