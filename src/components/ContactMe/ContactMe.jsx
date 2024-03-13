import ContactForm from "./ContactForm"
import ContactList from "./ContactList"
import { Element } from 'react-scroll';
import { motion, useScroll, useTransform, useAnimationControls } from "framer-motion";
import { useRef } from "react";
import Toast from "../Toast";


const ContactMe = () => {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1 1'],
  })

  const scroll = useTransform(scrollYProgress, [0, 1], ["50%", "0%"])

  const controls = useAnimationControls()

  const openToast = () => {

    controls.start("open")

  }

  return (
    <>
      <Toast message="Copied!" controls={controls} />
      <div ref={ref}>
        <Element name='contactMe' className="font-poppins h-full w-screen pb-10 bg-neutral-800 text-gray-400">
          <motion.div style={{ translateY: scroll }}>
            <div className="w-full">
              <h1 className="text-center py-20 sm:text-8xl text-6xl font-extralight ">Contact me:</h1>
            </div>
            <div className="flex xl:flex-row flex-col-reverse justify-between xl:divide-x divide-gray-400 w-full xl:items-stretch items-center ">
              <ContactForm />
              <ContactList openToast={openToast} />
            </div>
          </motion.div>
        </Element>
      </div >
    </>
  )
}

export default ContactMe
