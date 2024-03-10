import Button from "../Button"
import MobileDrawer from "./MobileDrawer"
import { useState } from "react"
import clsx from "clsx"
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'

const Navbar = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div
        className="hidden z-50 lg:flex fixed p-3 px-5 w-full justify-between bg-gradient-to-b from-zinc-800 to-black/0"
      >

        <span className="gap-x-8 flex">
          <motion.div
            initial={{ y: ['100vh'] }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} isDynamic={true}>
              <Button text={'Home'} open={open} textColor={'white'} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: ['100vh'] }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: .4 }
            }>
            <Link activeClass="active" to="aboutMe" spy={true} smooth={true} duration={500}>
              <Button text={'About me'} open={open} textColor={'white'} />
            </Link>
          </motion.div>
        </span>
        <span className="gap-x-8 flex">
          <motion.div
            initial={{ y: ['100vh'] }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: .2 }
            }>
            <Link activeClass="active" to="skills" offset={-100} spy={true} smooth={true} duration={500} >
              <Button text={'Skills'} open={open} textColor={'white'} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: ['100vh'] }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: .8 }
            }>
            <Link activeClass="active" to="projects" offset={150} spy={true} smooth={true} duration={500} >
              <Button text={'Projects'} open={open} textColor={'white'} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: ['100vh'] }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: .6 }
            }>
            <Link activeClass="active" to="contactMe" offset={60} spy={true} smooth={true} duration={500} >
              <Button text={'Contact me'} open={open} textColor={'white'} />
            </Link>
          </motion.div>
        </span>
      </div >
      <div className="w-full fixed xl:hidden flex justify-end z-50">
        <MobileDrawer open={drawerOpen} setOpen={setDrawerOpen}>
          <div className="flex items-center justify-center h-full" >
            <div className={clsx("flex flex-col gap-y-11 whitespace-nowrap transition-all delay-300", drawerOpen ? "scale-100" : "scale-0")}>
              <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >
                <Button text={'Home'} open={open} textColor={'white'} />
              </Link>
              <Link activeClass="active" to="aboutMe" spy={true} smooth={true} duration={500} >
                <Button text={'About me'} open={open} textColor={'white'} />
              </Link>
              <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} >
                <Button text={'Skills'} open={open} textColor={'white'} />
              </Link>
              <Link activeClass="active" to="projects" offset={150} spy={true} smooth={true} duration={500} >
                <Button text={'Projects'} open={open} textColor={'white'} />
              </Link>
              <Link activeClass="active" to="contactMe" spy={true} smooth={true} duration={500} >
                <Button text={'Contact me'} open={open} textColor={'white'} />
              </Link>
            </div>
          </div>
        </MobileDrawer>
      </div>
    </>
  )
}

export default Navbar
