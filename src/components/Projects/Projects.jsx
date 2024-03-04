import typeFitness from '../../assets/Projects/typeFitness.png'
import messangerClone from '../../assets/Projects/messangerClone.png'
import leetcode_cheatsheet from '../../assets/Projects/leetcode_cheatsheet.png'

const Projects = () => {
    return (
        <div >
            <div className='flex'>
                <h1 className='flex items-center text-7xl font-poppins font-semibold ml-10'>typeFitness</h1>
                <img src={typeFitness} alt="type-fitness" className='scale-[65%] -translate-x-36' />
            </div>
            <div className='flex w-screen -translate-x-80'>
                <img src={messangerClone} alt="messanger-clone" className='scale-[65%]' />
                <h1 className='flex items-center text-center text-7xl font-poppins font-semibold -translate-x-48'>Messangar Clone</h1>
            </div>
            <div className='flex w-screen'>
                <h1 className='flex flex-col justify-center text-7xl font-poppins font-semibold ml-10'>LeetCode_
                    <span className="block text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-400 to-violet-700">CheatSheet</span>
                </h1>
                <img src={leetcode_cheatsheet} alt="type-fitness" className='scale-[65%] -translate-x-36' />
            </div>
        </div>
    )
}

export default Projects
