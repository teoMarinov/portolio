import typeFitness from '../../assets/Projects/typeFitness.png'
import messangerClone from '../../assets/Projects/messangerClone.png'
import leetcode_cheatsheet from '../../assets/Projects/leetcode_cheatsheet.png'
import ItemRow from './ItemRow'
import { Element } from 'react-scroll';
import Heading from '../Headling';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
    const nav = useNavigate()
    return (
        <Element name='projects' className='flex flex-col gap-y-20 mb-44'>
            <Heading text="Projects" />
            <ItemRow img={typeFitness} headline={'TypeFitness'} reverse={false} bgColor={'black'} navTo={'/typeFitness'} />
            <ItemRow img={messangerClone} headline={'Messanger Clone'} reverse={true} bgColor={'white'} navTo={'/messangerClone'} />
            <ItemRow img={leetcode_cheatsheet} headline={'LeetCode Cheatsheet'} reverse={false} bgColor={'black'} navTo={'/leetCodeCheatSheet'} />
            <div className='w-full flex justify-center'>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => nav('/allProjects')}
                    className='border border-gray-500/40 text-gray-70 transition-all hover:scale-110 hover:bg-gray-200 md:text-xl text-sm md:w-1/2 w-1/3 md:p-3 py-2 rounded-md font-poppins'
                >
                    View all projects
                </motion.button>
            </div>
        </Element>
    )
}

export default Projects

