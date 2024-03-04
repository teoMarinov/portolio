import Links from "./Links";
import { FaGithub } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";

import picture from "../../assets/Me.png";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
const Home = () => {
    return (
        <div className="mb-44 flex flex-col md:justify-around items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-300 to-gray-400 h-screen ">
            <div className="items-center xl:translate-y-28 flex px-12">
                <div className="translate-y-8 flex flex-col w-full h-full justify-center items-center">
                    <span className="md:h-full h-screen flex flex-col justify-center">
                        <h1 className="lg:text-8xl xl:text-start lg:text-center md:mt-0 m-0 text-9xl w-fit font-bold whitespace-nowrap">
                            Teodor Marinov
                            <span
                                className="block text-transparent my-10 bg-clip-text bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-400 to-violet-700"
                            >
                                A Junior Developer
                            </span>
                        </h1>
                        <div className="flex lg:flex-row flex-col xl:justify-start justify-center items-center gap-10 text-gray-100 w-full mt-16">
                            <Links link="https://github.com/teoMarinov" text="GitHub">
                                <FaGithub size={26} className="w-10" />
                            </Links>
                            <Links link="" text="Download my CV">
                                <GrDocumentDownload size={26} className="w-10" />
                            </Links>
                        </div>
                    </span>
                </div>

                <div className="hidden xl:inline ml-16">
                    <img src={picture} alt="picture" className="w-[60rem] rounded-full" /></div>
            </div>
            <div className="hidden border-4 border-gray-100 w-12 h-24 rounded-full xl:flex items-center xl:translate-y-0 translate-y-10 justify-center">
                <MdOutlineKeyboardDoubleArrowDown size={42} className="text-gray-100" />
            </div>
        </div>
    )
}

export default Home
