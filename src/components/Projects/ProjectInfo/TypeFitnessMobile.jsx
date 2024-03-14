import ProjectInfoTamplate from "./ProjectInfoTamplate"
import typeScript from "../../../assets/SkillsIcons/typeScript.png"
import reactNative from "../../../assets/SkillsIcons/reactNative.png"
import firebase from "../../../assets/SkillsIcons/firebase.png"

const TypeFitnessMobile = () => {
    const description = [
        'Mobile version for TypeFitness',
        'Using expo'
    ]
    return (
        <ProjectInfoTamplate
            title='Type Fitness Mobile'
            description={description}
            gitHub={'https://github.com/teoMarinov/typeFitnessMobile'}
        >

            <img src={typeScript} alt="type-script" />
            <img src={reactNative} alt="reactNative" />
            <img src={firebase} alt="firebase" />

        </ProjectInfoTamplate>
    )
}

export default TypeFitnessMobile
