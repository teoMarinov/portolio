import typeFitness from '../../assets/Projects/typeFitness.png'
import messangerClone from '../../assets/Projects/messangerClone.png'
import leetcode_cheatsheet from '../../assets/Projects/leetcode_cheatsheet.png'
import ItemRow from './ItemRow'
import {Element} from 'react-scroll';

const Projects = () => {
    return (
        <Element name='projects' className='flex flex-col gap-y-20 mb-44'>
            <h1 className="w-screen text-center 2xl:text-9xl sm:text-8xl text-6xl font-poppins font-extralight">Projects</h1>
            <ItemRow img={typeFitness} headline={'typeFitness'} reverse={false} bgColor={'black'} />
            <ItemRow img={messangerClone} headline={'Messanger Clone'} reverse={true} bgColor={'white'} />
            <ItemRow img={leetcode_cheatsheet} headline={'LeetCode Cheatsheet'} reverse={false} bgColor={'black'} />
            {/* <div className='flex lg:flex-row items-center justify-around gap-x-5 md:gap-y-8 flex-col'>
                <div className='w-96'>
                    <h1 className='flex flex-col items-center 2xl:text-7xl xl:text-6xl lg:text-5xl text-7xl font-poppins font-semibold'>LeetCode_
                        <span className="block text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-400 to-violet-700">CheatSheet</span>
                    </h1>
                </div>
                <div className='lg:w-2/3 w-full'>
                    <img src={leetcode_cheatsheet} alt="type-fitness" />
                </div>
            </div> */}

        </Element>
    )
}

export default Projects

