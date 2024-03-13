import SkillsRow from "./SkillsRow"
import { Element } from 'react-scroll';
import Heading from "../Headling";

const Skills = () => {

   

    return (
            <Element name="skills" className="sm:h-screen h-fit md:my-0 mt-14 mb-44">
                <Heading text="Skill" />
                <SkillsRow />
            </Element>
    )
}

export default Skills
