import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
import ProjectCard from './Components/Project/Project'
import Contact from "./Components/Contact/Contact"
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Experience" element={<Experience/>}/>
    <Route path="Project" element={<ProjectCard/>}/>
    <Route path="Contact" element={<Contact/>}/>
    </Route>
    </Routes>
    <About />
    <Experience/>
    <ProjectCard/>
    <Contact/>
    </BrowserRouter>
    
  )
}

export default App