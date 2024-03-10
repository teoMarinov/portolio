import javaScript from "../../assets/SkillsIcons/javaScript.png"
import { useNavigate } from "react-router-dom"

const JavaScript = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/javaScript')} src={javaScript} alt="javascript" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default JavaScript
