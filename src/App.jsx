import { useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [open, setOpen] = useState('');

  return (
    <div className=" bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-300 to-gray-400  w-screen h-[3400px]">
      <div className="w-full flex justify-between">
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

      {open}
    </div>
  )
}