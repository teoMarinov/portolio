import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Element } from 'react-scroll';


const AboutMe = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1 0.65'],
    })

    const headingVal = useTransform(scrollYProgress, [0, 1], ["-80%", "0%"])

    const paragraphVal = useTransform(scrollYProgress, [0, 1], ["80%", "0%"])


    return (
        <Element name='aboutMe' className="sm:h-screen h-fit md:my-0 mt-14 mb-44 flex items-center">
            <div ref={ref}>
                <div className="flex lg:flex-row flex-col items-center justify-center font-poppins gap-x-36 ">
                    <motion.h1
                        style={{ translateX: headingVal }}
                        className="2xl:text-9xl lg:text-7xl sm:text-8xl text-6xl font-extralight text-center lg:w-fit w-screen mb-14"
                    >
                        About me:
                    </motion.h1>
                    <motion.div
                        style={{ translateX: paragraphVal }}
                        className="h-fit lg:w-1/2 w-screen p-3 sm:text-3xl text-2xl text-justify"
                    >
                        After graguating from Telerik Academy I have since been actively engaged in furthering my expertise in various technologies and enhancing my comprehension of web development. Honing my abilities and knowledge by working of different side projects using different technologies. I am also activle looking for opportunities to start my softwear developer career.
                    </motion.div>
                </div>
            </div>
        </Element>
    )
}

export default AboutMe
