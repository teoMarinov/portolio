import { useRef } from "react";
import SkillsRow from "./SkillsRow"
import { Element } from 'react-scroll';
import { useScroll } from "framer-motion";
import Heading from "./Headling";

const Skills = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1.3', '1.7 1'],
    })

    return (
        <div ref={ref}>
            <Element name="skills" className="sm:h-screen h-fit md:my-0 mt-14 mb-44">
                <Heading />
                <SkillsRow scroll={scrollYProgress}/>
            </Element>
        </div>
    )
}

export default Skills
