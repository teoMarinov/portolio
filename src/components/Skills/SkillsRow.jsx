import typeScript from "../../assets/SkillsIcons/typeScript.png"
import javaScript from "../../assets/SkillsIcons/javaScript.png"
import html from "../../assets/SkillsIcons/html.png"
import css from "../../assets/SkillsIcons/css.png"
import php from "../../assets/SkillsIcons/php.png"
import sql from "../../assets/SkillsIcons/sql.png"
import react from "../../assets/SkillsIcons/react.png"
import nextJs from "../../assets/SkillsIcons/nextjs.png"
import reactNative from "../../assets/SkillsIcons/reactNative.png"
import framerMotion from "../../assets/SkillsIcons/framerMotion.svg"
import tailwind from "../../assets/SkillsIcons/tailwind.png"
import chakraUi from "../../assets/SkillsIcons/chakraUI.png"
import shadcn from "../../assets/SkillsIcons/shadcn.png"
import firebase from "../../assets/SkillsIcons/firebase.png"
import prisma from "../../assets/SkillsIcons/prisma.png"
import mongo from "../../assets/SkillsIcons/mongo.png"
import postgress from "../../assets/SkillsIcons/postgresql.png"
import mysql from '../../assets/SkillsIcons/mysql.svg'
import ajax from "../../assets/SkillsIcons/ajax.png"
import webSocket from "../../assets/SkillsIcons/websocket.png"
import nodeJs from "../../assets/SkillsIcons/nodeJS.png"
import pusher from "../../assets/SkillsIcons/pusher.svg"

import { motion, useTransform } from "framer-motion"

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
                <img src={typeScript} alt="type-script" />
                <img src={javaScript} alt="java-script" />
                <img src={html} alt="html" />
                <img src={css} alt="css" />
                <img src={nextJs} alt="nextJs" className="mt-2" />
                <img src={react} alt="react" />
                <img src={reactNative} alt="react-native" className="mt-2" />
                <img src={php} alt="php" />
                <img src={sql} alt="sql" />
                <img src={nodeJs} alt="nodeJs" className="mt-4" />
                <img src={tailwind} alt="tailwind" className="mt-2" />
            </motion.div>
            <motion.div
                style={{
                    translateX: scrollRight
                }}

                className="flex gap-x-5 2xl:size-48 md:size-40 sm:size-32 size-20 2xl:w-full md:w-screen sm:w-full w-screen mb-16"
            >
                <img src={tailwind} alt="tailwind" className="mt-2" />
                <img src={chakraUi} alt="chakraUI" className="mt-2" />
                <img src={shadcn} alt="shadcn" className="mt-2 rounded-lg" />
                <img src={firebase} alt="firebase" className="mt-2" />
                <img src={prisma} alt="prisma" className="mt-4" />
                <img src={mongo} alt="mongo" className="mt-4" />
                <img src={postgress} alt="postgress" className="mt-4" />
                <img src={mysql} alt="mysql" className="mt-4" />
                <img src={framerMotion} alt="framer-motion" className="mt-2" />
                <img src={ajax} alt="ajax" className="mt-4" />
                <img src={webSocket} alt="webSocket" className="mt-4" />
                <img src={pusher} alt="pusher" className="mt-1" />

            </motion.div>
        </>
    )
}

export default SkillsRow
