import { motion } from "framer-motion"
const Toast = ({ message, controls }) => {
    return (
        <div style={{ right: 'calc(50% - 128px)' }} className="fixed top-5 z-50 w-fit cursor-pointer">
            <motion.div
                variants={{
                    initial: {
                        scale: 0
                    },
                    open: {
                        scale: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        transition: {
                            duration: 3,
                            ease: 'easeInOut'
                        }
                    }
                }}
                animate={controls}
                initial={'initial'}
                whileTap={'initial'}
                whileHover={{ scale: 1 }}
                className="p-4 h-fit w-64 bg-neutral-800 text-gray-400 border-gray-400/60 border-2 font-semibold flex text-lg items-center justify-center z-50 rounded-lg"
            >
                {message}
            </motion.div>
        </div>
    )
}

export default Toast