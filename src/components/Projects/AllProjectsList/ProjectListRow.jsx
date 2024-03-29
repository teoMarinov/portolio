import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import Clickable from "../../Clickable";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectListRow = ({ data }) => {
    return (
        <div className="overflow-hidden">
            {data.map((project, index) => (

                <motion.div
                    initial={{
                        opacity: 0,
                        y: -100
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .2, ease: 'easeIn', delay: index * 0.2 + .85 }}

                    key={project.title}
                    className="p-6 font-poppins overflow-hidden border-b border-gray-700/40 flex justify-between"
                >
                    {/* Name and stack */}
                    <div className=" 2xl:pl-44">
                        <Clickable textColor={'text-gray-600'} lineColor="bg-gray-400">
                            <h1
                                className="text-6xl py-5 font-extralight "
                            >
                                <Link to={project.navTo}>{project.title}</Link>
                            </h1>
                        </Clickable>
                        <div className="flex gap-x-7 text-xl pl-7 mt-2">
                            {project.stack && project.stack.map((tech) => (
                                <div key={tech}
                                >
                                        <p className="cursor-default">{tech}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* LinkIcons */}
                    <div className="flex text-gray-600 2xl:pr-14">
                        <a
                            href={project.gitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group transition-[color] flex items-center hover:text-sky-600 border-l xl:px-24 px-8 border-gray-700/40 ">
                            <FaGithub size={44} className=" transition-transform group-hover:-translate-y-2" />
                        </a>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group transition-[color] flex items-center hover:-translate-y-1 hover:text-sky-600 xl:border-x xl:px-24 px-8 border-gray-700/40">
                                <CiLink size={44} className=" transition-transform group-hover:-translate-y-2" />
                            </a>)
                        }
                    </div>
                </motion.div>
            ))
            }
        </div >
    )
}

export default ProjectListRow
