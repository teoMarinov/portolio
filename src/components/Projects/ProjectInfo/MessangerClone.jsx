import ProjectInfoTamplate from "./ProjectInfoTamplate"
import typeScript from "../../../assets/SkillsIcons/typeScript.png"
import next from '../../../assets/SkillsIcons/nextjs.png'
import tailwind from '../../../assets/SkillsIcons/tailwind.png'
import mongoDb from '../../../assets/SkillsIcons/mongo.png'
import prisma from '../../../assets/SkillsIcons/prisma.png'
import pusher from '../../../assets/SkillsIcons/pusher.svg'


const MessangerClone = () => {
    const description = [
        // "Github and Google authentication",
        "Message with people",
        "Make group chats",
        "Edit your profile"
    ]
    return (
        <ProjectInfoTamplate
            title='Messanger Clone'
            description={description}
            gitHub={'https://github.com/teoMarinov/messenger-clone'}
            link={'https://messenger-clone-woad-gamma.vercel.app'}
        >

            <img src={typeScript} alt="type-script" />
            <img src={next} alt="next js" />
            <img src={tailwind} alt="tailwind" className="mt-3" />
            <img src={mongoDb} alt="mongoDb" />
            <img src={prisma} alt="prisma" />
            <img src={pusher} alt="pusher" />

        </ProjectInfoTamplate>
    )
}

export default MessangerClone
