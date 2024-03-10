import { motion, useTransform } from "framer-motion"
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
import Git from "../Icons/Git"
import MySql from "../Icons/MySql"
import FramerMotion from "../Icons/FramerMotion"
import Ajax from "../Icons/Ajax"
import Websocket from "../Icons/WebSockets"
import Pusher from "../Icons/Pusher"


const SkillsRow = ({ scroll }) => {



    const scrollLeft = useTransform(scroll, [0, 1], ["95%", "-65%"])

    const scrollRight = useTransform(scroll, [0, 1], ["-130%", "50%"])

    return (
        <>
            <motion.div
                style={{
                    translateX: scrollLeft,
                }}
                className="flex gap-x-5 2xl:size-48 md:size-40 sm:size-32 size-20 2xl:w-full md:w-screen sm:w-full w-screen mb-16"
            >
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
                <Tailwind />
            </motion.div>
            <motion.div
                style={{
                    translateX: scrollRight
                }}

                className="flex gap-x-5 2xl:size-48 md:size-40 sm:size-32 size-20 2xl:w-full md:w-screen sm:w-full w-screen mb-16"
            >
                <Tailwind />
                <ChakraUI />
                <Shadcn />
                <Firebase />
                <Prisma />
                <MongoDb />
                <Git />
                <MySql/>
                <FramerMotion />
                <Ajax />
                <Websocket />
                <Pusher />

            </motion.div>
        </>
    )
}

export default SkillsRow
