import { motion } from "framer-motion"
import clsx from "clsx"
import { FaCheck } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const SubmitButton = ({ sent, controls }) => {



    return (
        <button
            type="submit"
            className={clsx("text-gray-300 hover:text-gray-200 w-full xl:h-12 lg:h-20 h-12 rounded-md h-12transition-all duration-200 hover:border-gray-500 border border-gray-600 hover:bg-gray-700 overflow-hidden", sent && 'cursor-not-allowed hover:bg-none')}
        >
            <div className="relative xl:h-12 lg:h-20 h-12 ">
                <p className="h-full flex items-center justify-center">Send Email Directly</p>
                <motion.div
                    variants={{
                        initial: {
                            width: 0,
                        },
                        open: {
                            width: '100%',
                        },
                    }}
                    initial={'initial'}
                    animate={controls}
                    className="bg-neutral-800 overflow-hidden text-xl absolute top-0 h-full flex items-center justify-center"
                >
                    Loading <LoadAnimation />
                </motion.div>
                <motion.div
                    variants={{
                        initial: {
                            width: 0,
                        },
                        finish: {
                            width: '100%',
                        }
                    }}
                    initial={'initial'}
                    animate={controls}
                    className="bg-green-700 overflow-hidden absolute origin-right top-0 h-full flex items-center justify-center text-xl"
                >
                    Sent <FaCheck className="ml-2" />
                </motion.div>
            </div>
        </button>

    )
}

export default SubmitButton

const LoadAnimation = () => {
    return (
        <motion.div
            animate={{
                rotate: 360
            }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="ml-2 mt-1 text-xl font-bold flex gap-x-2">
            <AiOutlineLoading3Quarters color="white" size={18} />

        </motion.div>
    )
}