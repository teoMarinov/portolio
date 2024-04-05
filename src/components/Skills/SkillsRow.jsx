import { motion, useTransform, useScroll } from "framer-motion"
// import React from "../Icons/React"
// import TypeScript from "../Icons/TypeScript"
// import JavaScript from "../Icons/JavaScript"
// import Html from "../Icons/Html"
// import Css from "../Icons/Css"
// import Next from "../Icons/Next"
// import Reactnative from "../Icons/ReactNative"
// import Php from "../Icons/Php"
// import Sql from "../Icons/Sql"
// import NodeJs from "../Icons/NodeJs"
// import Tailwind from "../Icons/TailwindCss"
// import ChakraUI from "../Icons/ChakraUi"
// import Shadcn from "../Icons/Shadcn"
// import Firebase from "../Icons/Firebase"
// import Prisma from "../Icons/Prisma"
// import MongoDb from "../Icons/MongoDb"
// import MySql from "../Icons/MySql"
// import FramerMotion from "../Icons/FramerMotion"
// import Pusher from "../Icons/Pusher"
import { useRef } from "react";
import typeScript from "../../assets/SkillsIcons/typeScript.png"
import tailwind from "../../assets/SkillsIcons/tailwind.png"
import sql from "../../assets/SkillsIcons/sql.png"
import shadcn from "../../assets/SkillsIcons/shadcn.png"
import reactNative from "../../assets/SkillsIcons/reactNative.png"
import react from "../../assets/SkillsIcons/react.png"
import pusher from "../../assets/SkillsIcons/pusher.svg"
import prisma from "../../assets/SkillsIcons/prisma.png"
import php from "../../assets/SkillsIcons/php.png"
import nodeJs from "../../assets/SkillsIcons/node.png"
import next from "../../assets/SkillsIcons/nextjs.png"
import mySql from "../../assets/SkillsIcons/mysql.svg"
import mongoDb from "../../assets/SkillsIcons/mongo.png"
import javaScript from "../../assets/SkillsIcons/javaScript.png"
import html from "../../assets/SkillsIcons/html.png"
import git from "../../assets/SkillsIcons/git.png"
import framerMotion from "../../assets/SkillsIcons/framerMotion.svg"
import firebase from "../../assets/SkillsIcons/firebase.png"
import css from "../../assets/SkillsIcons/css.png"
import chakraUi from "../../assets/SkillsIcons/chakraUI.png"
import java from "../../assets/SkillsIcons/java.svg"
import springBoot from "../../assets/SkillsIcons/spring-svgrepo-com.svg"

const SkillsRow = () => {

    const topRef = useRef(null)
    const botRef = useRef(null)

    const { scrollYProgress: topScroll } = useScroll({
        target: topRef,
        offset: ['1 0.9', '0 0.1'],
    })
    const { scrollYProgress: botScroll } = useScroll({
        target: botRef,
        offset: ['1 0.75', '0 0.2'],
    })

    const scrollLeft = useTransform(topScroll, [0, 1], ["0", "-100%"])

    const scrollRight = useTransform(botScroll, [0, 1], ["-100%", "0%"])


    return (
        <>
            <motion.div
                ref={topRef}
                style={{
                    translateX: scrollLeft,
                }}
                /**
                 * 2xl: 190px
                 * md: 175px
                 * sm: 145px
                 * 95px
                */
                className="
                2xl:w-[calc(2100px-100%)]
                md:w-[calc(1930px-100%)]
                sm:w-[calc(1590px-100%)]
                w-[calc(1075px-100%)]
                "
            >
                <div className="flex gap-x-5 2xl:size-44 md:size-40 sm:size-32 size-20 mb-16">

                    <img src={typeScript} alt="type script" />
                    <img src={javaScript} alt="java script" />
                    <img src={html} alt="html" />
                    <img src={css} alt="css" />
                    <img src={next} alt="next" />
                    <img src={react} alt="react" />
                    <img src={reactNative} alt="react native" />
                    <img src={java} alt="java" />
                    <img src={springBoot} alt="springBoot" />
                    <img src={php} alt="php" />
                    <img src={sql} alt="sql" />

                </div>
            </motion.div>
            <motion.div
                ref={botRef}
                style={{
                    translateX: scrollRight,
                }}
                /**
                 * 2xl: 211px
                 * md: 179px
                 * sm: 147px
                 * 100px
                */
                className="
                2xl:w-[calc(2110px-100%)]
                md:w-[calc(1790px-100%)]
                sm:w-[calc(1470px-100%)]
                w-[calc(1000px-100%)]
                "
            >
                <div className="flex gap-x-5 2xl:size-48 md:size-40 sm:size-32 size-20 mb-16">

                    <img src={nodeJs} alt="node J S" />
                    <img src={tailwind} alt="tailwind" className="mt-8 -translate-y-4" />
                    <img src={chakraUi} alt="chakra Ui" />
                    <img src={shadcn} alt="shadcn" />
                    <img src={firebase} alt="css" />
                    <img src={prisma} alt="prisma" />
                    <img src={mongoDb} alt="mongo Db" />
                    <img src={mySql} alt="my Sql" />
                    <img src={git} alt="git" />
                    <img src={framerMotion} alt="framerMotion" />

                </div>

            </motion.div>
        </>
    )
}

export default SkillsRow