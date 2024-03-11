import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import Clickable from "../../Clickable";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectListRow = ({ data }) => {
    return (
        <div>
            {data.map(project => (
                <div
                    key={project.title}
                    className="
                    p-6
                    font-poppins font-light
                  "
                >
                    <div className="flex gap-x-6 items-center">
                        <Clickable textColor={'text-gray-600'} lineColor="bg-gray-400">
                            <h1 className="text-4xl   p-3">
                                <Link to={project.navTo}>{project.title}</Link>
                            </h1>
                        </Clickable>
                        <a
                            href={project.gitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-[color] hover:-translate-y-1 hover:text-sky-600">
                            <FaGithub size={27} />
                        </a>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-[color] hover:-translate-y-1 hover:text-sky-600">
                                <CiLink size={27} />
                            </a>)
                        }

                    </div>
                    <div className="flex gap-x-7 text-xl pl-6 pt-2">
                        {project.stack && project.stack.map(tech => (
                            <div key={tech}>
                                <Clickable textColor={'text-gray-600'} lineColor="bg-gray-400">
                                    <Link to={`/${tech}`}>{tech}</Link>
                                </Clickable>
                            </div>
                        ))}
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default ProjectListRow
