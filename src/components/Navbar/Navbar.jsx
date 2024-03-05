import Button from "../Button"
import MobileDrawer from "./MobileDrawer"
import { useState } from "react"
import clsx from "clsx"
import { Link } from 'react-scroll';

const Navbar = ({ open, setOpen }) => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="hidden z-50 lg:flex fixed p-3 px-5 w-full justify-between">

        <span className="gap-x-8 flex">
          <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} onSetActive={() => setOpen('Home')}>
            <Button text={'Home'} open={open} textColor={'gray-900'} />
          </Link>
          <Link activeClass="active" to="aboutMe" spy={true} smooth={true} duration={500} onSetActive={() => setOpen('About me')}>
            <Button text={'About me'} open={open} textColor={'gray-900'} />
          </Link>
        </span>

        <span className="gap-x-8 flex">
          <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} onSetActive={() => setOpen('Skills')}>
            <Button text={'Skills'} open={open} textColor={'gray-900'} />
          </Link>
          <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} onSetActive={() => setOpen('Projects')}>
            <Button text={'Projects'} open={open} textColor={'gray-900'} />
          </Link>
          <Link activeClass="active" to="contactMe" spy={true} smooth={true} duration={500} onSetActive={() => setOpen('Contact me')}>
            <Button text={'Contact me'} open={open} textColor={'gray-900'} />
          </Link>
        </span>
      </div >
      <div className="w-full fixed xl:hidden flex justify-end z-50">
        <MobileDrawer open={drawerOpen} setOpen={setDrawerOpen}>
          <div className="flex items-center justify-center h-full" >
            <div className={clsx("flex flex-col gap-y-11 whitespace-nowrap transition-all delay-300", drawerOpen ? "scale-100" : "scale-0")}>
              <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} onSetActive={() => setOpen('Home')}>
                <Button text={'Home'} open={open} textColor={'white'} />
              </Link>
              <Link activeClass="active" to="aboutMe" spy={true} smooth={true} duration={500} onSetActive={() => setOpen('About me')}>
                <Button text={'About me'} open={open} textColor={'white'} />
              </Link>
              <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} onSetActive={() => setOpen('Skills')}>
                <Button text={'Skills'} open={open} textColor={'white'} />
              </Link>
              <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} onSetActive={() => setOpen('Projects')}>
                <Button text={'Projects'} open={open} textColor={'white'} />
              </Link>
              <Link activeClass="active" to="contactMe" spy={true} smooth={true} duration={500} onSetActive={() => setOpen('Contact me')}>
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
