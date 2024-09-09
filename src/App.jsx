import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import Aboutme from "./components/AboutMe/Aboutme"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Contacts from "./components/Contacts/Contacts"
import Footer from "./components/Footer/Footer"


function App() {

  return (
    <>
      <div className="wrapper">
        <Navbar/>
        <Header/>
        <Aboutme/>
        <Skills/>
        <Projects/>
        <Contacts/>
        <Footer/> 
      </div>
    </>
  )
}

export default App
