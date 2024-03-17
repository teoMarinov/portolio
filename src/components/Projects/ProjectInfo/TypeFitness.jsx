import ProjectInfoTamplate from "./ProjectInfoTamplate"
import typeScript from "../../../assets/SkillsIcons/typeScript.png"
import react from "../../../assets/SkillsIcons/react.png"
import chakraUi from "../../../assets/SkillsIcons/chakraUI.png"
import firebase from "../../../assets/SkillsIcons/firebase.png"

const TypeFitness = () => {
    const description = [
        'Make workout plans',
        'Write the weight and reps for each set',
        'Keep track of your exercise progress',
        "Lookup and save different food's macros",
        "Combine foods into meals",
        "Save daily calories intake",
        "View macros logs",
        "Make a diet plan for the whole week",
    ]
    return (
        <ProjectInfoTamplate
            title='Type Fitness'
            description={description}
            gitHub={'https://github.com/teoMarinov/typeFitness'}
            link={'https://type-fitness.vercel.app'}
        >

            <img src={typeScript} alt="type-script" />
            <img src={react} alt="react" />
            <img src={chakraUi} alt="chakraUi" />
            <img src={firebase} alt="firebase" />

        </ProjectInfoTamplate>
    )
}

export default TypeFitness
