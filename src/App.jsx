import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  const [open, setOpen] = useState('Home');

  return (
    <div className=" bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-300 to-gray-400  w-screen h-[3400px]">
      <Navbar open={open} setOpen={setOpen} />
    </div>
  )
}