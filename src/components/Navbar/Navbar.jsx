import Button from "../Button"
import MobileDrawer from "./MobileDrawer"
import { useState } from "react"
import clsx from "clsx"
const Navbar = ({ open, setOpen }) => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="hidden z-50 lg:flex fixed p-3 px-5 w-full justify-between">
        <span className="gap-x-8 flex">
          <Button text={'Home'} open={open} setOpen={setOpen} />
          <Button text={'About me'} open={open} setOpen={setOpen} />
        </span>
        <span className="gap-x-8 flex">
          <Button text={'Skills'} open={open} setOpen={setOpen} />
          <Button text={'Projects'} open={open} setOpen={setOpen} />
          <Button text={'Contact me'} open={open} setOpen={setOpen} />
        </span>
      </div>
      <div className="w-full fixed lg:hidden flex  justify-end">
        <MobileDrawer open={drawerOpen} setOpen={setDrawerOpen}>
          <div className="flex items-center justify-center h-full" >
            <div className={clsx("flex flex-col gap-y-11 whitespace-nowrap transition-all delay-300", drawerOpen ? "scale-100" : "scale-0")}>
              <Button text={'Home'} open={open} setOpen={setOpen} />
              <Button text={'About me'} open={open} setOpen={setOpen} />
              <Button text={'Skills'} open={open} setOpen={setOpen} />
              <Button text={'Projects'} open={open} setOpen={setOpen} />
              <Button text={'Contact me'} open={open} setOpen={setOpen} />
            </div>
          </div>
        </MobileDrawer>
      </div>
    </>
  )
}

export default Navbar
