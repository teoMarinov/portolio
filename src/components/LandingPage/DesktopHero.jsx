import Clickable from "../Clickable";
import { FaGithub } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import cv from '../../assets/TeodorMarinovCV.pdf'
import picture from "../../assets/Me.png";
import { motion } from "framer-motion";

const DesktopHero = () => {
    return (
        <div className="items-center xl:translate-y-28 flex px-12">
            <div className="translate-y-8 flex flex-col w-full h-full justify-center items-center">
                <div className="md:h-full h-screen flex-col justify-center flex ">
                    <motion.h1
                        initial={{ y: ['100vh'] }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1, ease: 'circOut' }}
                        className="lg:text-8xl sm:text-9xl text-8xl font-bold xl:text-start lg:text-center w-fit whitespace-nowrap"
                    >
                        Teodor Marinov
                    </motion.h1>
                    <motion.h1
                        initial={{ y: ['100vh'] }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.1, ease: 'circOut' }}
                        className="lg:text-8xl text-nowrap sm:text-9xl text-8xl font-bold block my-10 text-purple-500"
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
                                    className="text-2xl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={'https://github.com/teoMarinov'}>
                                    GitHub
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
                                <a href={cv} download="Tedodor Marinov Resume" className="text-2xl">
                                    Download my CV
                                </a>
                            </Clickable>
                        </motion.span>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ y: ['100vh'] }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.3, ease: 'circOut' }}
                className="hidden xl:inline ml-16"
            >
                <img src={picture} alt="picture" className="w-[55rem] rounded-full shadow-2xl" />
            </motion.div>
        </div>
    )
}

export default DesktopHero
