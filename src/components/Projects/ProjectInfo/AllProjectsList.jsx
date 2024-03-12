import data from "../../../common/allProjectsData"
import ProjectListRow from "./ProjectListRow"
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AllProjectsList = () => {

    const navigate = useNavigate()

    return (
        <div>
            <div className="flex shadow-md border-b items-center border-gray-400">
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
                    className=" w-full text-center text-8xl text-gray-600 font-poppins font-extralight p-3"
                >
                    All Projects
                </motion.h1>
                <motion.div
                    initial={{
                        x: '100px',
                        opacity: .2,
                        rotate: 360
                    }}
                    animate={{
                        x: '0px',
                        opacity: 1,
                        rotate: 0
                    }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="size-fit m-2 mr-5 border-gray-700/60 p-3 border-2 rounded-full text-gray-800 cursor-pointer transition-[backGround] hover:bg-gray-200 group"
                    onClick={() => navigate('/')}
                >
                    <IoHomeOutline size={40} className="text-gray-700/80 group-hover:scale-110" />
                </motion.div>
            </div>
            <ProjectListRow data={data} />
        </div>
    )
}

export default AllProjectsList