import ProjectInfoTamplate from "./ProjectInfoTamplate"
import typeScript from "../../../assets/SkillsIcons/typeScript.png"
import react from "../../../assets/SkillsIcons/react.png"
import firebase from "../../../assets/SkillsIcons/firebase.png"
import chakraUi from "../../../assets/SkillsIcons/chakraUI.png"

const TypeFitness = () => {
    const description = [
        '1',
        '2'
    ]
    return (
        <ProjectInfoTamplate 
        title='TypeFitness' 
        description={description} 
        gitHub={'https://github.com/teoMarinov/typeFitness'}
        link={'https://type-fitness.vercel.app'}
        >
            <img src={typeScript} alt="type-script" />
            <img src={react} alt="react" className="mt-1" />
            <img src={chakraUi} alt="chakraUI" className="mt-1" />
            <img src={firebase} alt="firebase" className="mt-1" />

        </ProjectInfoTamplate>
    )
}

export default TypeFitness
