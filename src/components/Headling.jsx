import { useRef } from "react";

import { motion, useScroll } from "framer-motion";

const Heading = ({text}) => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '3 1'],
    })

    return (
        <div ref={ref}>
            <motion.h1
                style={{
                    scale: scrollYProgress,
                    opacity: scrollYProgress
                }}
                className="w-screen text-center 2xl:text-9xl sm:text-8xl text-6xl font-poppins font-extralight sm:mb-16 mb-8">
                {text}
            </motion.h1>
        </div>

    )
}

export default Heading
