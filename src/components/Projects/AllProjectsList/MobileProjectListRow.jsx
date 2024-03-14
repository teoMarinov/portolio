import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileProjectListRow = ({ data }) => {
    return (
        <div className="overflow-hidden">
            {data.map((project, index) => (

                <motion.div
                    initial={{
                        opacity: 0,
                        y: -100
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .2, ease: 'easeIn', delay: index * 0.2 + 1.6 }}

                    key={project.title}
                    className="p-6 font-poppins overflow-hidden border-b border-gray-700/40"
                >

                    <div className="flex sm:flex-row flex-col items-center justify-around">

                        <motion.h1
                            whileTap={{ scale: 0.9 }}
                            className="md:text-6xl sm:text-4xl text-3xl py-5 font-extralight whitespace-break-spaces"
                        >
                            <Link to={project.navTo}>{project.title}</Link>
                        </motion.h1>

                        <div className="flex gap-x-10">
                            <a
                                href={project.gitHub}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="md:size-8 size-6" />
                            </a>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <CiLink className="md:size-10 size-8" />
                                </a>)
                            }
                        </div>
                    </div>



                    <div className="flex justify-around md:text-lg flex-wrap text-sm mt-2 gap-x-2">
                        {project.stack && project.stack.map((tech) => (
                            <motion.div
                                whileTap={{ scale: 0.9 }}
                                key={tech}
                            >
                                <p className="cursor-default">{tech}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* LinkIcons */}

                </motion.div>
            ))
            }
        </div >
    )
}

export default MobileProjectListRow
