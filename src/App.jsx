import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";

export default function App() {


  return (
    <div className=" w-screen overflow-x-hidden">
   
      <Navbar/>

      <Home  />
      <AboutMe />

      <Skills />
      <Projects />
      <ContactMe />
    </div>
  )
}