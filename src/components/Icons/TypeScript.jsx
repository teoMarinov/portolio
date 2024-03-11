import typeScript from "../../assets/SkillsIcons/typeScript.png"
import { useNavigate } from "react-router-dom"

const TypeScript = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/TypeScript')} src={typeScript} alt="type-script" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default TypeScript
