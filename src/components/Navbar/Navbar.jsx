import Button from "../Button"
import MobileDrawer from "./MobileDrawer"
import { useState } from "react"
import clsx from "clsx"
import { Link } from 'react-scroll';

const Navbar = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState('Home');


  return (
    <>
      <div className="hidden z-50 lg:flex fixed p-3 px-5 w-full justify-between">

        <span className="gap-x-8 flex">
          <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} isDynamic={true}>
            <Button text={'Home'} open={open} textColor={'gray-900'} onClick={() => setOpen('Home')} />
          </Link>
          <Link activeClass="active" to="aboutMe" spy={true} smooth={true} duration={500}>
            <Button text={'About me'} open={open} textColor={'gray-900'} onClick={() => setOpen('About me')} />
          </Link>
        </span>
        <span className="gap-x-8 flex">
          <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} >
            <Button text={'Skills'} open={open} textColor={'gray-900'} onClick={() => setOpen('Skills')} />
          </Link>
          <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} >
            <Button text={'Projects'} open={open} textColor={'gray-900'} onClick={() => setOpen('Projects')} />
          </Link>
          <Link activeClass="active" to="contactMe" spy={true} smooth={true} duration={500} >
            <Button text={'Contact me'} open={open} textColor={'gray-900'} onClick={() => setOpen('Contact me')} />
          </Link>
        </span>
      </div >
      <div className="w-full fixed xl:hidden flex justify-end z-50">
        <MobileDrawer open={drawerOpen} setOpen={setDrawerOpen}>
          <div className="flex items-center justify-center h-full" >
            <div className={clsx("flex flex-col gap-y-11 whitespace-nowrap transition-all delay-300", drawerOpen ? "scale-100" : "scale-0")}>
              <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >
                <Button text={'Home'} open={open} textColor={'white'} onClick={() => setOpen('Home')} />
              </Link>
              <Link activeClass="active" to="aboutMe" spy={true} smooth={true} duration={500} >
                <Button text={'About me'} open={open} textColor={'white'} onClick={() => setOpen('About me')} />
              </Link>
              <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} >
                <Button text={'Skills'} open={open} textColor={'white'} onClick={() => setOpen('Skills')} />
              </Link>
              <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} >
                <Button text={'Projects'} open={open} textColor={'white'} onClick={() => setOpen('Projects')} />
              </Link>
              <Link activeClass="active" to="contactMe" spy={true} smooth={true} duration={500} >
                <Button text={'Contact me'} open={open} textColor={'white'} onClick={() => setOpen('Contact me')} />
              </Link>
            </div>
          </div>
        </MobileDrawer>
      </div>
    </>
  )
}

export default Navbar
