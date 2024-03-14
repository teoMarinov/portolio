import ProjectInfoTamplate from "./ProjectInfoTamplate"
import shadcn from "../../../assets/SkillsIcons/shadcn.png"

import typeScript from "../../../assets/SkillsIcons/typeScript.png"
import next from '../../../assets/SkillsIcons/nextjs.png'
import tailwind from '../../../assets/SkillsIcons/tailwind.png'
import mongoDb from '../../../assets/SkillsIcons/mongo.png'
import prisma from '../../../assets/SkillsIcons/prisma.png'

const LeetCodeCheatSheet = () => {
    const description = [
        "Take notes of your LeetCode problem's solutions",
        "Sort by name, difficulty, date",
        "Change between dark and light theme",
    ]
    return (
        <ProjectInfoTamplate
            title='LeetCode CheatSheet'
            description={description}
            gitHub={'https://github.com/teoMarinov/LeetCode_Cheatsheet'}
            link={'https://leet-code-cheatsheet.vercel.app'}
        >
            <img src={typeScript} alt="type-script" />
            <img src={next} alt="next js" />
            <img src={shadcn} alt="shad cn" />
            <img src={tailwind} alt="tailwind" className="mt-3"/>
            <img src={mongoDb} alt="mongoDb" />
            <img src={prisma} alt="prisma" />
        </ProjectInfoTamplate>
    )
}

export default LeetCodeCheatSheet
