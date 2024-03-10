import { motion } from "framer-motion"

const AnimatedPage = ({ children, text }) => {
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
                className='fixed w-screen h-screen bg-zinc-800 flex justify-center items-center z-50 text-white text-6xl font-light font-poppins'
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
