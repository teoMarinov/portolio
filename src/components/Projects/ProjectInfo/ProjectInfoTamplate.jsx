import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
const ProjectInfoTamplate = ({ children, gitHub, link, title, description }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (

    <div className="flex flex-col justify-between h-screen fixed">

      <div className="w-screen border-b border-gray-300 shadow-md p-9  font-poppins flex justify-between">
        <div>
          <motion.h1
            initial={{
              width: 0
            }}
            animate={{
              width: 'fit-content'
            }}
            transition={{ duration: 0.4, delay: 0.05, ease: 'easeIn' }}
            className=" overflow-hidden text-7xl h-20 font-light"
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
            transition={{ duration: 0.4, delay: .45 }}
            className="flex items-center w-fit pt-6 pl-3 gap-x-5 lg:text-xl md:text-5xl text-2xl overflow-hidden"
          >
            <a
              onClick={(e) => { e.stopPropagation() }}
              className="transition-all hover:-translate-y-1 hover:text-sky-600"
              target="_blank"
              rel="noopener noreferrer"
              href={gitHub}>
              <FaGithub size={26} className="w-10" />
            </a>

            {link && <a
              onClick={(e) => { e.stopPropagation() }}
              className=" transition-all hover:-translate-y-1 hover:text-sky-600"
              target="_blank"
              rel="noopener noreferrer"
              href={link}>
              <CiLink size={26} className="w-10" />
            </a>}
          </motion.div>
        </div>
        <motion.div
          initial={{
            translateX: '100px',
            opacity: .2,
            rotate: 360
          }}
          animate={{
            translateX: '0px',
            opacity: 1,
            rotate: 0
          }}
          transition={{ duration: 0.5, delay: 0.2 * description.length + 0.95 + children.length * 0.20 }}
          className="size-fit border-gray-600 p-2 border-2 rounded-full text-gray-600 cursor-pointer transition-[backGround] hover:bg-gray-200 hover:scale-150"
          onClick={handleClick}
        >
          <IoMdArrowRoundBack size={48} />
        </motion.div>
      </div>

      <div className="h-full p-12 text-2xl gap-y-8 flex flex-col overflow-auto">
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
        <div className="flex gap-x-16">
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
              className="size-20"
            >
              {child}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectInfoTamplate
