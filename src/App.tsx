import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Experience from "./Components/Experience/Experience"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import ProjectCard from "./Components/Projects/ProjectCard"

const App = () => {
  return (
    <div>
     <Navbar/>
     <Home/>
     <About/>
     <ProjectCard/>
     <Experience />
     <Contact/>
    </div>
  )
}

export default App