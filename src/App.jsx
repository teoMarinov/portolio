
import { ReactLenis } from '@studio-freight/react-lenis'
import LoadingScreen from "./components/Loading";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home';

export default function App() {

  const [loadingScreen, setLoadingScreen] = useState(true);
  const [allowScroll, setAllowScroll] = useState(false);

  const location = useLocation();

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
          <AnimatePresence mode='wait'>
            <Routes key={location.pathname}>
              <Route path="/" element={<Home />} />
            </Routes>
          </AnimatePresence>
          {/* <Home /> */}
        </div>
      }

    </ReactLenis>
  )
}