import prisma from "../../assets/SkillsIcons/prisma.png"
import { useNavigate } from "react-router-dom"

const Prisma = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/prisma')} src={prisma} alt="prisma" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default Prisma
