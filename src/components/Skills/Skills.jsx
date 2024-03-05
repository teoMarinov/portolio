import SkillsRow from "./SkillsRow"
import {Element} from 'react-scroll';

const Skills = () => {
    return (
        <Element name="skills" className="sm:h-screen h-fit md:my-0 mt-14 mb-44">
            <h1 className="w-screen text-center 2xl:text-9xl sm:text-8xl text-6xl font-poppins font-extralight sm:mb-16 mb-8">Skills</h1>
            <SkillsRow />
            <SkillsRow />
        </Element>
    )
}

export default Skills
