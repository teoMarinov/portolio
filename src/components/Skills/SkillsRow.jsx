import { motion, useTransform, useScroll } from "framer-motion"
import React from "../Icons/React"
import TypeScript from "../Icons/TypeScript"
import JavaScript from "../Icons/JavaScript"
import Html from "../Icons/Html"
import Css from "../Icons/Css"
import Next from "../Icons/Next"
import Reactnative from "../Icons/ReactNative"
import Php from "../Icons/Php"
import Sql from "../Icons/Sql"
import NodeJs from "../Icons/NodeJs"
import Tailwind from "../Icons/TailwindCss"
import ChakraUI from "../Icons/ChakraUi"
import Shadcn from "../Icons/Shadcn"
import Firebase from "../Icons/Firebase"
import Prisma from "../Icons/Prisma"
import MongoDb from "../Icons/MongoDb"
import MySql from "../Icons/MySql"
import FramerMotion from "../Icons/FramerMotion"
import Pusher from "../Icons/Pusher"
import { useRef } from "react";


const SkillsRow = () => {

    const topRef = useRef(null)
    const botRef = useRef(null)

    const { scrollYProgress: topScroll } = useScroll({
        target: topRef,
        offset: ['1 0.9', '0 0.1'],
    })
    const { scrollYProgress: botScroll } = useScroll({
        target: botRef,
        offset: ['1 0.9', '0 0.1'],
    })

    const scrollLeft = useTransform(topScroll, [0, 1], ["0", "-100%"])

    const scrollRight = useTransform(botScroll, [0, 1], ["-100%", "0%"])
    const screenWidth = window.innerWidth;

    const getWidthTop = () => {
        if (screenWidth >= 1536) return `calc(1870px - ${screenWidth}px)`;
        if (screenWidth > 768) return `calc(1710px - ${screenWidth}px)`;
        if (screenWidth > 640) return `calc(1410px - ${screenWidth}px)`;
        return `calc(950px - ${screenWidth}px)`;
    };

    const getWidthBot = () => {
        if (screenWidth >= 1536) return `calc(1870px - ${screenWidth}px)`;
        if (screenWidth > 768) return `calc(1600px - ${screenWidth}px)`;
        if (screenWidth > 640) return `calc(1300px - ${screenWidth}px)`;
        return `calc(880px - ${screenWidth}px)`;
    };

    return (
        <>
            <motion.div
                ref={topRef}
                style={{
                    translateX: scrollLeft,
                    width: getWidthTop()
                }}
            >
                <div className="flex gap-x-5 2xl:size-44 md:size-40 sm:size-32 size-20 mb-16">

                    <TypeScript />
                    <JavaScript />
                    <Html />
                    <Css />
                    <Next />
                    <React />
                    <Reactnative />
                    <Php />
                    <Sql />
                    <NodeJs />

                </div>
            </motion.div>
            <motion.div
                ref={botRef}
                style={{
                    translateX: scrollRight,
                    width: getWidthBot()
                }}
            >
                <div className="flex gap-x-5 2xl:size-48 md:size-40 sm:size-32 size-20 mb-16">
                    <Tailwind />
                    <ChakraUI />
                    <Shadcn />
                    <Firebase />
                    <Prisma />
                    <MongoDb />
                    <MySql />
                    <FramerMotion />
                    <Pusher />
                </div>

            </motion.div>
        </>
    )
}

export default SkillsRow