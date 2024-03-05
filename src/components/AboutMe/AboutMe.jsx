import {Element} from 'react-scroll';
const AboutMe = () => {
    return (
        <Element name='aboutMe' className="sm:h-screen h-fit md:my-0 mt-14 mb-44">
            <div className="flex lg:flex-row flex-col items-center justify-center font-poppins gap-x-36 h-full ">
                <h1 className="2xl:text-9xl lg:text-7xl sm:text-8xl text-6xl font-extralight text-center lg:w-fit w-screen mb-14">About me:</h1>
                <div className="h-fit bg-red-s800 lg:w-1/2 w-screen p-3 sm:text-3xl text-2xl ">
                    After graguating from Telerik Academy I have since been actively engaged in furthering my expertise in various technologies and enhancing my comprehension of web development. Honing my abilities and knowledge by working of different side projects using different technologies. I am also activle looking for opportunities to start my softwear developer career.
                </div></div>
        </Element>
    )
}

export default AboutMe
