import ProjectInfoTamplate from "./ProjectInfoTamplate"
import TypeScript from "../../Icons/TypeScript"
import Next from "../../Icons/Next"
import Tailwind from "../../Icons/TailwindCss"
import MongoDb from "../../Icons/MongoDb"
import Prisma from "../../Icons/Prisma"
import Pusher from "../../Icons/Pusher"

const MessangerClone = () => {
    const description = [
        "Github and Google authentication",
        "Message with people",
        "Make group chats",
        "Edit your profile,"
    ]
    return (
        <ProjectInfoTamplate
            title='MessangerClone'
            description={description}
            gitHub={'https://github.com/teoMarinov/messenger-clone'}
            link={'https://messenger-clone-woad-gamma.vercel.app'}
        >
            <TypeScript />
            <Next />
            <Tailwind />
            <MongoDb />
            <Prisma />
            <Pusher />

        </ProjectInfoTamplate>
    )
}

export default MessangerClone
