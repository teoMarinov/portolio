
import { ReactLenis } from '@studio-freight/react-lenis'
import LoadingScreen from "./components/Loading";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home';
import TypeFitness from './components/Projects/ProjectInfo/TypeFitness';
import MessangerClone from './components/Projects/ProjectInfo/MessangerClone';
import LeetCodeCheatSheet from './components/Projects/ProjectInfo/LeetCodeCheatSheet';

export default function App() {

  const [loadingScreen, setLoadingScreen] = useState(false);
  const [allowScroll, setAllowScroll] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setLoadingScreen(false);
      setAllowScroll(true);
      return
    }
    setLoadingScreen(true);

    setTimeout(() => {
      setLoadingScreen(false);
    }, 3000)
    setTimeout(() => {
      setAllowScroll(true);
    }, 5000)
  }, [])


  return (

    <ReactLenis root>
      <div className={clsx("w-screen overflow-hidden", allowScroll ? 'h-full' : 'h-screen')}>
        <AnimatePresence>
          {loadingScreen && <LoadingScreen />}
        </AnimatePresence>
        <AnimatePresence mode='wait'>
          <Routes key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/typeFitness" element={<TypeFitness />} />
            <Route path='/messangerClone' element={<MessangerClone />} />
            <Route path='/leetCodeCheatSheet' element={<LeetCodeCheatSheet />} />
          </Routes>
        </AnimatePresence>
      </div>

    </ReactLenis>
  )
}