import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import Clickable from "../../Clickable";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectListRow = ({ data }) => {
    return (
        <div>
            {data.map((project, index) => (
                <div
                    key={project.title}
                    className="p-6 font-poppins font-light overflow-hidden"
                >
                    <div className="flex gap-x-6 items-center ">
                        <Clickable textColor={'text-gray-600'} lineColor="bg-gray-400">
                            <motion.h1
                                initial={{
                                    opacity: .4,
                                    y: -100
                                }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: .2, ease: 'easeInOut', delay: index * 0.3 + 1.6 }}
                                className="text-4xl p-3"
                            >
                                <Link to={project.navTo}>{project.title}</Link>
                            </motion.h1>
                        </Clickable>
                        <motion.a
                            initial={{
                                opacity: .4,
                                y: -100
                            }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: .2, ease: 'easeInOut', delay: index * 0.3 + 1.65 }}
                            href={project.gitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-[color] hover:-translate-y-1 hover:text-sky-600">
                            <FaGithub size={27} />
                        </motion.a>
                        {project.link && (
                            <motion.a
                                initial={{
                                    opacity: .4,
                                    y: -100
                                }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: .2, ease: 'easeInOut', delay: index * 0.3 + 1.7 }}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-[color] hover:-translate-y-1 hover:text-sky-600">
                                <CiLink size={27} />
                            </motion.a>)
                        }

                    </div>
                    <div className="flex gap-x-7 text-xl pl-6 mt-2">
                        {project.stack && project.stack.map((tech, i) => (
                            <motion.div
                                key={tech}
                                initial={{
                                    opacity: 0,

                                }}
                                animate={{ opacity: 1}}
                                transition={{ duration: .2, ease: 'easeInOut', delay: 1.7 + index * 0.3 + i * .1 }}
                            >
                                <Clickable textColor={'text-gray-600'} lineColor="bg-gray-400">
                                    <Link to={`/${tech}`}>{tech}</Link>
                                </Clickable>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default ProjectListRow
