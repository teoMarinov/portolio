import data from "../../../common/allProjectsData"
import ProjectListRow from "./ProjectListRow"
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const AllProjectsList = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="flex shadow-md border-b border-gray-400">

                <motion.div
                    initial={{
                        translateX: '-100px',
                        opacity: .2,
                        rotate: -360
                    }}
                    animate={{
                        translateX: '0px',
                        opacity: 1,
                        rotate: 0
                    }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="size-fit m-2 ml-5 border-gray-700/60 p-3 border-2 rounded-full text-gray-800 cursor-pointer transition-[backGround] hover:bg-gray-200 hover:scale-150"
                    onClick={() => navigate('/')}
                >
                    <IoHomeOutline size={40} className="text-gray-700/80" />
                </motion.div>
                <motion.h1
                    initial={{
                        translateY: '-100px',
                        opacity: .2,
                    }}
                    animate={{
                        translateY: '0px',
                        opacity: 1,
                    }}
                    transition={{ duration: 0.3, delay: 1.5, ease: 'easeInOut' }}
                    className=" w-full text-center text-6xl text-gray-600 font-poppins font-extralight p-3"
                >
                    All Projects
                </motion.h1>
            </div>
            <ProjectListRow data={data} />
        </div>
    )
}

export default AllProjectsList