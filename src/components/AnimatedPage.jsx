import { motion } from "framer-motion"
import clsx from "clsx"
const AnimatedPage = ({ children, text, display = true }) => {
    return (
        <div className="z-50">
            <motion.div
                initial={{
                    y: '0%'
                }}
                animate={{
                    y: '-100%',
                    transition: { duration: .3, delay: 1, ease: 'easeInOut' }
                }}
                exit={
                    {
                        y: ['100%', '0%'],
                        transition: { duration: .3 }
                    }
                }
                className={clsx('fixed w-screen h-screen bg-zinc-800 justify-center items-center z-50 text-white text-center sm:text-6xl text-4xl font-light font-poppins', display ? " flex" : "hidden")}
            >
                {text}
            </motion.div>
            <div className="-z-50">
                {children}
            </div>
        </div>
    )
}

export default AnimatedPage
