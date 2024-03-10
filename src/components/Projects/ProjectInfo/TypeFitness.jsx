import ProjectInfoTamplate from "./ProjectInfoTamplate"
import TypeScript from "../../Icons/TypeScript"
import React from "../../Icons/React"
import ChakraUI from "../../Icons/ChakraUi"
import Firebase from "../../Icons/Firebase"

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
            <TypeScript />
            <React />
            <ChakraUI />
            <Firebase />
        </ProjectInfoTamplate>
    )
}

export default TypeFitness
