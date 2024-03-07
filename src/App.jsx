import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import { ReactLenis } from '@studio-freight/react-lenis'
import LoadingScreen from "./components/Loading";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";
export default function App() {

  const [loadingScreen, setLoadingScreen] = useState(true);
  const [allowScroll, setAllowScroll] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(false);
    }, 3000)
    setTimeout(() => {
      setAllowScroll(true);
    }, 5000)

  }, [])
  return (

    <ReactLenis root>
      <AnimatePresence>
        {loadingScreen && <LoadingScreen />}
      </AnimatePresence>

      {
        loadingScreen ||

        <div className={clsx("w-screen overflow-hidden", allowScroll ? 'h-full' : 'h-screen')}>

          <Navbar />

          <Home />
          <AboutMe />
          <Skills />
          <Projects />
          <ContactMe />

        </div>
      }

    </ReactLenis>
  )
}