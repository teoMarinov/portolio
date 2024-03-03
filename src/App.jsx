import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

export default function App() {
  const [open, setOpen] = useState('Home');

  return (
    <div className=" w-screen h-screen">
      <Navbar open={open} setOpen={setOpen} />
      <Home />
      <div className="w-1 h-[43000px]"></div>
    </div>
  )
}