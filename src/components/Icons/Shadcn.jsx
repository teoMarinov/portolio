import shadcn from "../../assets/SkillsIcons/shadcn.png"
import { useNavigate } from "react-router-dom"

const Shadcn = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/shadcn')} src={shadcn} alt="shadcn" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default Shadcn
