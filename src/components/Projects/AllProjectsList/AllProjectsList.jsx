import data from "../../../common/allProjectsData"
import ProjectListRow from "./ProjectListRow"
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MobileProjectListRow from "./MobileProjectListRow";
import { useState, useEffect } from "react";
import clsx from "clsx";
const AllProjectsList = () => {

    const navigate = useNavigate()

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 150)
    }, [])

    return (
        <div className={clsx(loaded ? "h-fit" : 'h-screen overflow-hidden')}>
            <div className="flex shadow-md border-b items-center border-gray-400">
                <motion.h1
                    initial={{
                        translateY: '-100px',
                        opacity: 0,
                    }}
                    animate={{
                        translateY: '0px',
                        opacity: 1,
                    }}
                    transition={{ duration: 0.3, delay: 1.5, ease: 'easeInOut' }}
                    className=" w-full text-center sm:text-8xl text-5xl text-gray-600 font-poppins font-extralight py-7"
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
                    className="size-fit m-2 mr-5 border-gray-700/60 sm:p-3 p-2 border-2 rounded-full text-gray-800 cursor-pointer transition-[backGround] lg:hover:bg-gray-200 group"
                    onClick={() => navigate('/')}
                >
                    <IoHomeOutline className="text-gray-700/80 sm:size-11 size-6 lg:group-hover:scale-110" />
                </motion.div>
            </div>
            <div className="lg:block ">
                <ProjectListRow data={data} />
            </div>
            <div className="lg:hidden block">
                <MobileProjectListRow data={data} />
            </div>
        </div>
    )
}

export default AllProjectsList