
import Clickable from "../Clickable";
import { FaGithub } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import cv from '../../assets/TeodorMarinovCV.pdf'
import { motion } from "framer-motion";
const MobileHero = () => {
    return (
        <div className="h-screen flex-col justify-center flex w-screen">

            <motion.div
                initial={{
                    scale: 0

                }}
                animate={{
                    scale: 1,
                    transition: { duration: .5, ease: 'linear', delay: .12 }
                }}
            >
                <motion.h1
                    animate={{ x: ["0%", '-51%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    className="sm:text-9xl text-8xl font-bold  md:mt-0 m-0 w-fit whitespace-nowrap"
                >
                    Teodor Marinov Teodor Marinov
                </motion.h1>
            </motion.div>

            <motion.div
                initial={{
                    scale: 0

                }}
                animate={{
                    scale: 1,
                    transition: { duration: .5, ease: 'linear', delay: .12 }
                }}
                className="w-fit"
            >
                <motion.h1
                    animate={{ x: ['-50.66%', '0%'] }}
                    transition={{ duration: 3.66, repeat: Infinity, ease: 'linear' }}
                    className="w-fit text-nowrap sm:text-9xl text-8xl font-bold block my-10 text-purple-500"
                >
                    A Junior Developer A Junior Developer
                </motion.h1>
            </motion.div>
            <div className="flex flex-col justify-center items-center gap-10 text-gray-100 w-full mt-16 text-2xl">
                <motion.span
                    initial={{ y: ['100vh'] }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1, ease: 'circOut' }}
                    className="flex items-center"
                >
                    <FaGithub size={26} className="w-10" />
                    <Clickable textColor={'text-gray-00'} lineColor={'bg-gray-100'}>
                        <a onClick={(e) => {
                            e.stopPropagation();
                        }}
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
                    transition={{ duration: 0.5, delay: 1.05, ease: 'circOut' }}
                    className="flex items-center gap-x-2">
                    <GrDocumentDownload size={26} />
                    <Clickable textColor={'text-gray-100'} lineColor={'bg-gray-100'}>
                        <a href={cv} download="Tedodor Marinov Resume">
                            Download my CV
                        </a>
                    </Clickable>
                </motion.span>
            </div>
        </div>
    )
}

export default MobileHero
