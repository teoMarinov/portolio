import Clickable from "../Clickable";
import { FaGithub } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import cv from '../../assets/TeodorMarinovCV.pdf'
import picture from "../../assets/Me.png";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { Element } from 'react-scroll';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from 'react-scroll';

const Home = () => {

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
                    className="sm:mb-0 mb-44 flex flex-col overflow-hidden md:justify-around items-center h-full min-h-screen" >
                    <div className="items-center xl:translate-y-28 flex px-12">
                        <div className="translate-y-8 flex flex-col w-full h-full justify-center items-center">
                            <span className="md:h-full h-screen flex flex-col justify-center">
                                <motion.h1
                                    initial={{ y: ['100vh'] }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 1, ease: 'circOut' }}
                                    className="lg:text-8xl sm:text-9xl text-6xl font-bold xl:text-start lg:text-center md:mt-0 m-0 w-fit whitespace-nowrap"
                                >
                                    Teodor Marinov
                                </motion.h1>
                                <motion.h1
                                    initial={{ y: ['100vh'] }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 1.1, ease: 'circOut' }}
                                    className="lg:text-8xl sm:text-9xl text-6xl font-bold block text-transparent my-10 bg-clip-text bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-400 to-violet-700"
                                >
                                    A Junior Developer
                                </motion.h1>
                                <div className="flex lg:flex-row flex-col xl:justify-start justify-center items-center gap-10 text-gray-100 w-full lg:mt-2 mt-16">
                                    <motion.span
                                        initial={{ y: ['100vh'] }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 1.5, ease: 'circOut' }}
                                        className="flex items-center"
                                    >
                                        <FaGithub size={26} className="w-10" />
                                        <Clickable textColor={'text-gray-00'} lineColor={'bg-gray-100'}>
                                            <a onClick={(e) => {
                                                e.stopPropagation();
                                            }}
                                                className="lg:text-2xl md:text-5xl text-2xl  "
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={'https://github.com/teoMarinov'}>GitHub

                                            </a>
                                        </Clickable>
                                    </motion.span>
                                    <motion.span
                                        initial={{ y: ['100vh'] }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 1.4, ease: 'circOut' }}
                                        className="flex items-center gap-x-2">
                                        <GrDocumentDownload size={26} />
                                        <Clickable textColor={'text-gray-100'} lineColor={'bg-gray-100'}>
                                            <a href={cv} download="Tedodor Marinov Resume" className="lg:text-2xl md:text-5xl text-2xl">Download my CV</a>
                                        </Clickable>
                                    </motion.span>
                                </div>
                            </span>
                        </div>

                        <motion.div
                            initial={{ y: ['100vh'] }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 1.3, ease: 'circOut' }}
                            className="hidden xl:inline ml-16"
                        >
                            <img src={picture} alt="picture" className="w-[60rem] rounded-full" />
                        </motion.div>
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

export default Home
