import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";

export default function App() {
  const [open, setOpen] = useState('Home');


  return (
    <div className=" w-screen overflow-x-hidden">
   
      <Navbar open={open} setOpen={setOpen} />

      <Home  />
      <AboutMe />

      <Skills />
      <Projects />
      <ContactMe />
    </div>
  )
}