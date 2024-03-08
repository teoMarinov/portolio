import { motion } from "framer-motion"
const LoadingScreen = () => {
  return (
    <motion.div
      exit={{
        height: "0vh",
        color: "rgb(39 39 42)"
      }}
      transition={{ duration: 0.6, ease: "circOut" }}
      className="w-screen h-screen bg-zinc-800 text-gray-200 text-5xl font-poppins font-extralight flex items-center justify-center overflow-hidden"
    >
      <div className="w-screen relative justify-center flex items-center h-64">
        <div className="absolute w-[53px]">
          <motion.h1
            initial={{
              width: 0
            }}
            animate={{
              width: 'fit-content'
            }}
            transition={{ duration: 0.2, delay: .4, ease: 'easeInOut' }}
            className="bg-zinc-800 overflow-hidden"
          >
            Hi!
          </motion.h1>
        </div>
        <div className="absolute w-28">
          <motion.h1
            initial={{
              width: 0
            }}
            animate={{
              width: 'fit-content'
            }}
            transition={{ duration: 0.2, delay: 1, ease: 'easeInOut'  }}
            className="bg-zinc-800 overflow-hidden"
          >
            Hello!
          </motion.h1>
        </div>
        <div className="absolute w-56">
          <motion.h1
            initial={{
              width: 0
            }}
            animate={{
              width: 'fit-content'
            }}
            transition={{ duration: 0.3, delay: 1.7, ease: 'easeInOut'  }}
            className="bg-zinc-800 overflow-hidden"
          >
            Welcome!
          </motion.h1>
        </div>
      </div >
    </motion.div >
  )
}

export default LoadingScreen
