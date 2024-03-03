import Links from "./Links";
import { FaGithub } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";

import picture from "../../assets/Me.png";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
const Home = () => {
    return (
        <div className="flex flex-col justify-around items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-300 to-gray-400 h-screen ">
            <div className="items-center justify-around translate-y-28 flex px-12 w-full">
                <div className="translate-y-8 flex flex-col w-full  justify-center items-center">
                    <span>
                        <h1 className="lg:text-8xl text-9xl texts-5xl w-fit font-bold">
                            Teodor Marinov
                            <span
                                className="block text-transparent  bg-clip-text bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-400 to-violet-700"
                            >
                                A Junior Developer
                            </span>
                        </h1>
                        <div className="flex lg:flex-row gap-10 text-gray-100 w-full mt-5">
                            <Links link="https://github.com/teoMarinov" text="GitHub">
                                <FaGithub size={26} className="w-10" />
                            </Links>
                            <Links link="" text="Download my CV">
                                <GrDocumentDownload size={26} className="w-10" />
                            </Links>
                        </div>
                    </span>
                </div>

                <img src={picture} alt="picture" className="hidden lg:inline w-[30rem] z-0  rounded-full" />
            </div>
            <div className="hidden border-4 border-gray-100 w-12 h-24 rounded-full lg:flex items-center justify-center">
                <MdOutlineKeyboardDoubleArrowDown size={42} className="text-gray-100" />
            </div>
        </div>
    )
}

export default Home
