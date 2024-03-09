import ProjectInfoTamplate from "./ProjectInfoTamplate"
import typeScript from "../../../assets/SkillsIcons/typeScript.png"
import react from "../../../assets/SkillsIcons/react.png"
import firebase from "../../../assets/SkillsIcons/firebase.png"
import chakraUi from "../../../assets/SkillsIcons/chakraUI.png"

const TypeFitness = () => {
    const description = [
        'Make workout plans',
        'Write the weight and reps for each set',
        'Keep track of your exercise progress',
        "Lookup and save diffrerent food's macros",
        "Combine foods into meals",
        "Save daily calories intake",
        "View macros logs",
        "Make a diet plan for the whole week",
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
