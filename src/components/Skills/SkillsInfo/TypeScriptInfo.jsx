import SkillsInfoTamplate from "./SkillsInfoTamplate"

const TypeScriptInfo = () => {
    const data = {
        title: "TypeScript",
        level: 'Advanced',
        projects: [
            {
                title: 'TypeFitness',
                gitHub: 'https://github.com/teoMarinov/typeFitness',
                link: 'https://type-fitness.vercel.app',
                stack: ['TypeScript', 'React', 'ChakraUi', 'Firebase']
            },
            {
                title: 'TypeFitnessMobile',
                
            },
            {
                title: 'MessangerClone',
                gitHub: 'https://github.com/teoMarinov/messenger-clone',
                link: 'https://messenger-clone-woad-gamma.vercel.app',
                stack: ['TypeScript', 'Next', 'Tailwind', 'MongoDb', 'Prisma']
            },
            {
                title: 'LeetCode_CheatSheet',
                gitHub: 'https://github.com/teoMarinov/LeetCode_Cheatsheet',
                link: 'https://leet-code-cheatsheet.vercel.app',
                stack: ['TypeScript', 'Next', 'Shadcn', 'Tailwind', 'MongoDb', 'Prisma']
            },
        ]

    }
    return (
        <div>
            <SkillsInfoTamplate data={data} />
        </div>
    )
}

export default TypeScriptInfo
