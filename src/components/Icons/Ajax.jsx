import ajax from "../../assets/SkillsIcons/ajax.png"
import { useNavigate } from "react-router-dom"

const Ajax = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/Ajax')} src={ajax} alt="ajax" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default Ajax
