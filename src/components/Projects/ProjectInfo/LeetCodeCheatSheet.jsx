import ProjectInfoTamplate from "./ProjectInfoTamplate"
import TypeScript from "../../Icons/TypeScript"
import Next from "../../Icons/Next"
import Shadcn from "../../Icons/Shadcn"
import Tailwind from "../../Icons/TailwindCss"
import MongoDb from "../../Icons/MongoDb"
import Prisma from "../../Icons/Prisma"


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
            <TypeScript />
            <Next />
            <Shadcn />
            <Tailwind />
            <MongoDb />
            <Prisma />
        </ProjectInfoTamplate>
    )
}

export default LeetCodeCheatSheet
