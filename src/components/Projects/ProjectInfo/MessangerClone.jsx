import ProjectInfoTamplate from "./ProjectInfoTamplate"
import typeScript from "../../../assets/SkillsIcons/typeScript.png"
import nextJs from "../../../assets/SkillsIcons/nextjs.png"
import tailwind from "../../../assets/SkillsIcons/tailwind.png"
import mongo from "../../../assets/SkillsIcons/mongo.png"
import prisma from "../../../assets/SkillsIcons/prisma.png"
import pusher from "../../../assets/SkillsIcons/pusher.svg"

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
        link={'https://messenger-clone-woad-gamma.vercel.app/'}
        >
            <img src={typeScript} alt="type-script" />
            <img src={nextJs} alt="nextJs" className="mt-2" />

            <img src={tailwind} alt="tailwind" className="mt-4" />
            <img src={mongo} alt="mongo" className="mt-1" />
            <img src={prisma} alt="prisma" />
            <img src={pusher} alt="pusher" className="mt-1" />

        </ProjectInfoTamplate>
    )
}

export default MessangerClone
