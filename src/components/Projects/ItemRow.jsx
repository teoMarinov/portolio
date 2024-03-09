import clsx from "clsx"

import { useRef } from 'react'

import { motion, useTransform, useScroll } from "framer-motion"

import { useNavigate } from "react-router-dom"

const ItemRow = ({ img, headline, reverse, bgColor, navTo }) => {

    const ref = useRef(null)
    const navigate = useNavigate()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1 1'],
    })


    const scrollLeft = useTransform(scrollYProgress, [0, 1], ["50%", "0%"])
    const scrollRight = useTransform(scrollYProgress, [0, 1], ["-50", "0%"])
    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1])

    return (
        <div ref={ref}>
            <div className={clsx('flex items-center justify-around md:gap-y-8 flex-col', reverse ? 'lg:flex-row-reverse' : 'lg:flex-row')}>
                <motion.div
                    style={{
                        translateX: reverse ? scrollLeft : scrollRight,
                        scale: scale
                    }}
                    className="sm:w-96 text-center">
                    <h1 className='flex items-center justify-center 2xl:text-7xl xl:text-6xl lg:text-5xl md:4xl sm:text-6xl text-3xl font-poppins font-light lg:mb-0 mb-5 break-words '>{headline}</h1>
                </motion.div>
                <motion.div
                    style={{
                        translateX: reverse ? scrollRight : scrollLeft,
                        scale: scale
                    }}
                    onClick={() => navigate(navTo)}
                    className='lg:w-2/3 w-full rounded-lg relative group cursor-pointer overflow-hidden'>
                    <span className={clsx("z-50 group-hover:absolute w-full h-full bg-opacity-15", bgColor === 'white' ? 'text-black bg-gray-600' : 'text-white bg-white')}></span>
                    <img src={img} alt="type-fitness" className="transition-all group-hover:scale-105" />
                </motion.div>
            </div>
        </div>
    )
}

export default ItemRow
