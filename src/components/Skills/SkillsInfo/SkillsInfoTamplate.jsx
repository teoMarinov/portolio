import ProjectListRow from "../../Projects/AllProjectsList/ProjectListRow";
import MobileProjectListRow from "../../Projects/AllProjectsList/MobileProjectListRow";
import { IoHomeOutline } from "react-icons/io5";
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import clsx from "clsx";

const SkillsInfoTamplate = ({ title, level, data }) => {
  
  const navigate = useNavigate()
  
  const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 150)
    }, [])
  
  return (
    <div className={clsx(loaded ? "h-fit" : 'h-screen overflow-hidden')}>
      <div className="w-screen border-b border-gray-300 shadow-md sm:p-9 pb-4 font-poppins flex sm:flex-row flex-col-reverse sm:items-start items-end justify-between text-gray-600 font-light">
        <div className="w-full flex ">
          <motion.h1
            initial={{
              width: 0
            }}
            animate={{
              width: 'fit-content'
            }}
            transition={{ duration: 0.4, delay: 1.05, ease: 'easeIn' }}
            className="overflow-hidden sm:text-7xl text-5xl sm:h-20 h-fit "
          >
            {title}
          </motion.h1>

          {/* <div className="ml-20">
            <p className="text-4xl text-center">{level}</p>
            <div className="flex mt-2">
              <div className={clsx("h-3 relative w-32 border border-gray-500/60 rounded-full mx-1 mt-2",
                level === "Beginner" && 'bg-red-700',
                level === "Intermediate" && 'bg-yellow-500',
                level === "Advanced" && 'bg-green-600'
              )} />
              <div className={clsx("h-3 relative w-32 border border-gray-500/60 rounded-full mx-1 mt-2",
                level === "Intermediate" && 'bg-yellow-500',
                level === "Advanced" && 'bg-green-600'
              )} />
              <div className={clsx("h-3 relative w-32 border border-gray-500/60 rounded-full mx-1 mt-2",
                level === "Advanced" && 'bg-green-600'
              )} /></div>
          </div> */}

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
          transition={{ duration: 0.5, delay: 0.2 * data.length + 0.95 }}
          className="size-fit m-2 border-gray-700/60 sm:p-3 p-2 border-2 rounded-full text-gray-800 cursor-pointer transition-[backGround] lg:hover:bg-gray-200 group"
          onClick={() => navigate('/')}
        >
          <IoHomeOutline className="text-gray-700/80 sm:size-11 size-6 lg:group-hover:scale-110" />
        </motion.div>
      </div>
      <div className="lg:block hidden">
        <ProjectListRow data={data} />
      </div>
      <div className="lg:hidden block">
        <MobileProjectListRow data={data} />
      </div>
    </div>
  )
}

export default SkillsInfoTamplate
