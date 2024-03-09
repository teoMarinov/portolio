import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";

const ProjectInfoTamplate = ({ children, gitHub, link, title, description }) => {

  return (

    <div className="flex flex-col justify-between h-screen">

      <div className="w-screen border-b border-gray-300 shadow-md p-9 font-poppins">
        <motion.h1
          initial={{
            width: 0
          }}
          animate={{
            width: 'fit-content'
          }}
          transition={{ duration: 0.4, ease: 'easeIn' }}
          className=" overflow-hidden text-7xl  font-light"
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

      <div className="h-full p-12 text-2xl">
        {description.map((text, index) => (
          <motion.li
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{ duration: 0.3, delay: 0.9 + index * 0.2, ease: 'circOut' }}

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
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{ duration: 0.3, delay: 0.3 * description.length + 0.9 + index * 0.2, ease: 'circOut' }}
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
