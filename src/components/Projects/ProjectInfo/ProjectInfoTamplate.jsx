import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
const ProjectInfoTamplate = ({ children, gitHub, link, title, description }) => {
  const navigate = useNavigate()


  return (

    <div className="flex flex-col justify-between h-screen fixed">

      <div className="w-screen border-b border-gray-300 shadow-md sm:p-9 pb-4 font-poppins flex sm:flex-row flex-col-reverse sm:items-start items-end justify-between">
        <div className="w-full">
          <motion.h1
            initial={{
              width: 0
            }}
            animate={{
              width: 'fit-content'
            }}
            transition={{ duration: 0.4, delay: 1.05, ease: 'easeIn' }}
            className="overflow-hidden md:text-nowrap sm:text-6xl text-5xl text-gray-600 font-poppins font-light sm:h-20 h-fit"
          >
            {title}
          </motion.h1>
          <motion.div
            initial={{
              width: 0
            }}
            animate={{
              width: 'fit-content'
            }}
            transition={{ duration: 0.4, delay: 1.45 }}
            className="flex items-center w-fit pt-6 pl-3 gap-x-5 lg:text-xl md:text-5xl text-2xl overflow-hidden"
          >
            <a
              onClick={(e) => { e.stopPropagation() }}
              className="transition-[color] hover:-translate-y-1 hover:text-sky-600"
              target="_blank"
              rel="noopener noreferrer"
              href={gitHub}>
              <FaGithub size={26} className="w-10" />
            </a>

            {link && <a
              onClick={(e) => { e.stopPropagation() }}
              className=" transition-[color] hover:-translate-y-1 hover:text-sky-600"
              target="_blank"
              rel="noopener noreferrer"
              href={link}>
              <CiLink size={26} className="w-10" />
            </a>}
          </motion.div>
        </div>
        <motion.div
          initial={{
            x: '100px',
            opacity: 0,
            rotate: 360
          }}
          animate={{
            x: '0px',
            opacity: 1,
            rotate: 0
          }}
          transition={{ duration: 0.5, delay: 0.2 * description.length + 0.95 + children.length * 0.20 }}
          className="size-fit m-2 mr-5 border-gray-700/60 sm:p-3 p-2 border-2 rounded-full text-gray-800 cursor-pointer transition-[backGround] lg:hover:bg-gray-200 group"
          onClick={() => navigate('/')}
        >
          <IoHomeOutline className="text-gray-700/80 sm:size-11 size-6 lg:group-hover:scale-110" />
        </motion.div>
      </div>

      <div className="h-full p-12 sm:text-2xl text-lg gap-y-8 flex flex-col overflow-auto">
        {description.map((text, index) => (
          <motion.li
            initial={{
              translateX: '100px',
              opacity: 0
            }}
            animate={{
              translateX: '0px',
              opacity: 1
            }}
            transition={{ duration: 0.2, delay: 0.9 + index * 0.2, ease: 'circOut' }}

            key={index}
          >
            {text}
          </motion.li>
        ))}
      </div>

      <div className="w-screen border-t gap-x-20 border-gray-300 shadow-md flex p-7 text-7xl font-poppins font-light">
        <motion.div
          drag="x"
          dragConstraints={{
            right: 0,
            left: children.length * -60,
          }}
          dragTransition={{
            bounceStiffness: 900,
            bounceDamping: 100,
          }}
          className="flex gap-x-16">

          {children.map((child, index) => (

            <motion.div
              initial={{
                translateY: '100px',
                opacity: 0
              }}
              animate={{
                translateY: '0px',
                opacity: 1
              }}
              transition={{ duration: 0.3, delay: 0.2 * description.length + 0.95 + index * 0.1, ease: 'circOut' }}
              key={index}
              className="sm:size-20 size-12"
            >
              {child}
            </motion.div>

          ))}

        </motion.div>
      </div>
    </div>
  )
}

export default ProjectInfoTamplate
