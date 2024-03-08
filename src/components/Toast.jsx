import { motion } from "framer-motion"
const Toast = ({ message, controls }) => {
    return (
        <div className="fixed top-5 right-[45%] z-50 w-fit">
            <motion.div
                variants={{
                    initial: {
                        scale: 0
                    },
                    open: {
                        scale: 1
                    }
                }}
                initial={'initial'}
                animate={controls}
                whileTap={'initial'}
                className="p-4 h-fit w-64 bg-blue-600 flex items-center justify-center text-white z-50 rounded-lg"
            >
                {message}
            </motion.div>
        </div>
    )
}

export default Toast
