import './Module.navbar.scss';
import BtnDarkMode from '../../theme/BtnDarkMode';


const Navbar = () => {


  return (
    <>
    <nav className="nav">
       <div className='container'>
            <div className="nav__row">
                <ul2 className="logo"><strong>Portfolio</strong></ul2>

                <input id="menu__toggle" type="checkbox" />
                    <label className="menu__btn" htmlFor="menu__toggle">
                      <span></span>
                    </label>

                <ul className="nav__list">
                    <li>
                      <a href="#header" className="nav__list_link">Home</a>
                      </li>
                    <li>
                      <a href="#aboutme" className="nav__list_link">About Me</a>
                      </li>
                    <li>
                      <a href="#skills" className="nav__list_link">Skills</a>
                      </li>
                    <li>
                      <a href="#projects" className="nav__list_link">Projects</a>
                      </li>
                    <li>
                      <a href="#contacts" className="nav__list_link">Contacts</a>
                      </li>
                    <BtnDarkMode />
                </ul>
            </div>
        </div>
    </nav>

    </>
  )
}

export default Navbar