import typeFitness from '../../assets/Projects/typeFitness.png'
import messangerClone from '../../assets/Projects/messangerClone.png'
import leetcode_cheatsheet from '../../assets/Projects/leetcode_cheatsheet.png'

const Projects = () => {
    return (
        <div className='flex flex-col gap-y-20'>
            <h1 className="w-screen text-center text-9xl font-poppins font-extralight">Projects</h1>

            <div className='flex lg:flex-row items-center justify-around md:gap-y-8 flex-col'>
                <div>
                    <h1 className='flex items-center 2xl:text-7xl xl:text-6xl lg:text-5xl text-7xl font-poppins font-semibold'>typeFitness</h1>
                </div>
                <div className='lg:w-2/3 w-full'>
                    <img src={typeFitness} alt="type-fitness" />
                </div>
            </div>
            <div className='flex lg:flex-row items-center justify-around gap-x-5 md:gap-y-8 flex-col-reverse'>
                <div className='lg:w-2/3 w-full'>
                    <img src={messangerClone} alt="type-fitness" />
                </div>
                <div className='w-96'>
                    <h1 className='flex items-center text-center 2xl:text-7xl xl:text-6xl lg:text-5xl text-7xl font-poppins font-semibold'>Messenger Clone</h1>
                </div>
            </div>
            <div className='flex lg:flex-row items-center justify-around gap-x-5 md:gap-y-8 flex-col'>
                <div className='w-96'>
                    <h1 className='flex flex-col items-center 2xl:text-7xl xl:text-6xl lg:text-5xl text-7xl font-poppins font-semibold'>LeetCode_
                        <span className="block text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-400 to-violet-700">CheatSheet</span>
                    </h1>
                </div>
                <div className='lg:w-2/3 w-full'>
                    <img src={leetcode_cheatsheet} alt="type-fitness" />
                </div>
            </div>

        </div>
    )
}

export default Projects

