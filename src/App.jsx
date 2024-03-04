import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";

export default function App() {
  const [open, setOpen] = useState('Home');

  return (
    <div className=" w-screen h-screen">
      <Navbar open={open} setOpen={setOpen} />
      <Home />
      <AboutMe />
      <Skills />
      <div className="w-1 h-[3000px]"></div>
    </div>
  )
}