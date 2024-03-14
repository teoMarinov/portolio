import ProjectInfoTamplate from "./ProjectInfoTamplate"
import typeScript from "../../../assets/SkillsIcons/typeScript.png"
import next from "../../../assets/SkillsIcons/nextjs.png"
import tailwind from "../../../assets/SkillsIcons/tailwind.png"
import shadcn from "../../../assets/SkillsIcons/shadcn.png"
import node from "../../../assets/SkillsIcons/node.png"

const Authin = () => {
    const description = [
        'Make an account with email, github, google',
        'Verify your email',
        'Send forgot password email',
        'Edit account',
        'User and Admin privileges '
    ]
  return (
    <ProjectInfoTamplate
            title='Authin'
            description={description}
            gitHub={'https://github.com/teoMarinov/authin-page'}
        >

            <img src={typeScript} alt="type-script" />
            <img src={next} alt="next js" />
            <img src={tailwind} alt="tailwind css" className="mt-3" />
            <img src={shadcn} alt="shad cn" />
            <img src={node} alt="node js" />


        </ProjectInfoTamplate>
  )
}

export default Authin
