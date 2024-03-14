
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
import AnimatedPage from './components/AnimatedPage';
import TypeScriptInfo from './components/Skills/SkillsInfo/TypeScriptInfo';
import AllProjectsList from './components/Projects/AllProjectsList/AllProjectsList';
import JavaScriptInfo from './components/Skills/SkillsInfo/JavaScriptInfo';
import TypeFitnessMobile from './components/Projects/ProjectInfo/TypeFitnessMobile';
import Authin from './components/Projects/ProjectInfo/Authin';
import Rettid from './components/Projects/ProjectInfo/Rettid';
export default function App() {

  const [loadingScreen, setLoadingScreen] = useState(false);
  const [lockScroll, setLockScroll] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setLoadingScreen(false);
      setLockScroll(true);
      return
    }
    setLoadingScreen(true);

    setTimeout(() => {
      setLoadingScreen(false);
    }, 3000)
    setTimeout(() => {
      setLockScroll(true);
    }, 4500)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (

    <ReactLenis root>
      <div className={clsx("w-screen overflow-hidden", lockScroll ? 'h-full' : 'h-screen')}>
        <AnimatePresence>
          {loadingScreen && <LoadingScreen />}
        </AnimatePresence>
        {loadingScreen ||
          <AnimatePresence mode='wait'>
            <Routes key={location.pathname}>
              <Route path="/" element={
                <AnimatedPage text={'Home'} display={lockScroll}>
                  <Home />
                </AnimatedPage>
              } />
              <Route path="/typeFitness" element={
                <AnimatedPage text={'Type Fitness'}>
                  <TypeFitness />
                </AnimatedPage>
              } />
              <Route path='/messangerClone' element={
                <AnimatedPage text={'Messanger Clone'}>
                  <MessangerClone />
                </AnimatedPage>
              } />
              <Route path='/leetCodeCheatSheet' element={
                <AnimatedPage text={'LeetCode CheatSheet'}>
                  <LeetCodeCheatSheet />
                </AnimatedPage>
              } />
                  <Route path='/allProjects' element={
                    <AnimatedPage text={'All Projects'}>
                      <AllProjectsList />
                    </AnimatedPage>
                  } />
                  <Route path='/typeFitnessMobile' element={
                    <AnimatedPage text={'TypeFitness Mobile'}>
                      <TypeFitnessMobile />
                    </AnimatedPage>
                  } />
                  <Route path='/authin' element={
                    <AnimatedPage text={'Authin'}>
                      <Authin />
                    </AnimatedPage>
                  } />
                  <Route path='/rettid' element={
                    <AnimatedPage text={'Rettid'}>
                      <Rettid />
                    </AnimatedPage>
                  } />
              {/* <Route path='/TypeScript' element={
                <AnimatedPage text={'TypeScript'}>
                  <TypeScriptInfo />
                </AnimatedPage>
              } />
              <Route path='/JavaScript' element={
                <AnimatedPage text={'JavaScript'}>
                  <JavaScriptInfo />
                </AnimatedPage>
              } /> */}
            </Routes>
          </AnimatePresence>
        }
      </div>

    </ReactLenis>
  )
}