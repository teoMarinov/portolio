import prisma from "../../assets/SkillsIcons/prisma.png"
import { useNavigate } from "react-router-dom"

const Prisma = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/Prisma')} src={prisma} alt="prisma" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default Prisma
