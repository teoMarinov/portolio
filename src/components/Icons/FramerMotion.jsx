import framerMotion from "../../assets/SkillsIcons/framerMotion.svg"
import { useNavigate } from "react-router-dom"

const FramerMotion = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/framerMotion')} src={framerMotion} alt="framerMotion" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default FramerMotion
