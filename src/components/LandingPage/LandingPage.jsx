import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { Element } from 'react-scroll';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from 'react-scroll';
import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";


const LandingPage = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['1 1', '2.5 1'],
    })

    const scroll = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])


    return (
        <div ref={ref} >
            <Element name="home" className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-300 to-gray-400">
                <motion.div
                    style={{
                        translateY: scroll
                    }}
                    className="sm:mb-0 mb-44 flex flex-col overflow-hidden md:justify-around items-center h-full min-h-screen"
                >
                    <div className=" lg:block hidden">
                        <DesktopHero />
                    </div>
                    <div className="lg:hidden block">
                        <MobileHero />
                    </div>

                    <motion.div
                        initial={{ y: ['100vh'] }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .3, delay: 1.1, ease: 'circOut' }}
                        className="hidden border-4 cursor-pointer border-gray-100 w-12 h-24 rounded-full xl:flex flex-col items-center xl:translate-y-0 translate-y-10 justify-center overflow-hidden"
                    >
                        <Link activeClass="active" to="aboutMe" spy={true} smooth={true} duration={500}>
                            <motion.div
                                animate={{
                                    y: [-60, 60],
                                    opacity: [0, 1, 0]
                                }}
                                transition={{ duration: 1.6, repeat: Infinity }}
                            >
                                <MdOutlineKeyboardDoubleArrowDown size={42} className="text-gray-100" />
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </Element>
        </div>
    )
}

export default LandingPage
