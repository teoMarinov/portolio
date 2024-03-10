import ProjectInfoTamplate from "./ProjectInfoTamplate"
import typeScript from "../../../assets/SkillsIcons/typeScript.png"
import nextJs from "../../../assets/SkillsIcons/nextjs.png"
import tailwind from "../../../assets/SkillsIcons/tailwind.png"
import mongo from "../../../assets/SkillsIcons/mongo.png"
import prisma from "../../../assets/SkillsIcons/prisma.png"
import shadcn from "../../../assets/SkillsIcons/shadcn.png"


const LeetCodeCheatSheet = () => {
    const description = [
        "Take notes of your LeetCode problem's solutions",
        "Sort by name, difficulty, date",
        "Change between dark and light theme",
    ]
    return (
        <ProjectInfoTamplate 
        title='LeetCode_CheatSheet'
        description={description} 
        gitHub={'https://github.com/teoMarinov/LeetCode_Cheatsheet'}
        link={'https://leet-code-cheatsheet.vercel.app'}
        >
            <img src={typeScript} alt="type-script" />
            <img src={nextJs} alt="nextJs" />

            <img src={shadcn} alt="shadcn" className="mt-1" />
            <img src={tailwind} alt="tailwind" className="mt-4" />
            <img src={mongo} alt="mongo" className="mt-1" />
            <img src={prisma} alt="prisma" />

        </ProjectInfoTamplate>
    )
}

export default LeetCodeCheatSheet
