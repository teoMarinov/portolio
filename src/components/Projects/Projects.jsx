import typeFitness from '../../assets/Projects/typeFitness.png'
import messangerClone from '../../assets/Projects/messangerClone.png'
import leetcode_cheatsheet from '../../assets/Projects/leetcode_cheatsheet.png'
import ItemRow from './ItemRow'
import { Element } from 'react-scroll';
import Heading from '../Headling';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const nav = useNavigate()
    return (
        <Element name='projects' className='flex flex-col gap-y-20 mb-44'>
            <Heading text="Projects" />
            <ItemRow img={typeFitness} headline={'typeFitness'} reverse={false} bgColor={'black'} navTo={'/typeFitness'}/>
            <ItemRow img={messangerClone} headline={'Messanger Clone'} reverse={true} bgColor={'white'} navTo={'/messangerClone'} />
            <ItemRow img={leetcode_cheatsheet} headline={'LeetCode Cheatsheet'} reverse={false} bgColor={'black'} navTo={'/leetCodeCheatSheet'}/>
            <button onClick={() => nav('/allProjects')}>View all projects</button>
        </Element>
    )
}

export default Projects

