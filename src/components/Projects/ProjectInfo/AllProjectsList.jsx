import data from "../../../common/allProjectsData"
import ProjectListRow from "./ProjectListRow"
import { IoMdArrowRoundBack } from "react-icons/io";
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
                    className="size-fit absolute m-2 ml-5 border-gray-600 p-1 border-2 rounded-full text-gray-600 cursor-pointer transition-[backGround] hover:bg-gray-200 hover:scale-150"
                    onClick={() => navigate('/')}
                >
                    <IoMdArrowRoundBack size={48} />
                </motion.div>
                <motion.ah1
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
                </motion.ah1>
            </div>
            <ProjectListRow data={data} />
        </div>
    )
}

export default AllProjectsList