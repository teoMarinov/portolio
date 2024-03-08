import Links from "./Links";
import { FaGithub } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import "./text.css";

const AnimatedText = () => {
  return (
    <div className="flex flex-col z-10 bg-gray-s800 ml-20 p-2">
      <svg viewBox="10 90 1000 250">
        <text
          x="50%"
          y="50%"
          dx="-1.32em"
          dy=".6em"
          textAnchor="middle"
          className="text-body"
        >
          Teodor Marinov
        </text>
        <text
          x="50%"
          y="50%"
          dx="-0.45em"
          dy="1.9em"
          textAnchor="middle"
          className="text-body"
        >
          A Junior Developer!
        </text>
        <text
          x="50%"
          y="50%"
          dx="2em"
          dy=".32em"
          textAnchor="middle"
          className="text-body"
        ></text>
      </svg>

      <div className="flex gap-10 ml-10 text-gray-100 ">
        <Links link="https://github.com/teoMarinov" text="GitHub">
          <FaGithub  size={26} className="w-10" />
        </Links>
        <Links link="" text="Download my CV">
        <GrDocumentDownload size={26} className="w-10" />
        </Links>
      </div>
    </div>
  );
};

export default AnimatedText;
