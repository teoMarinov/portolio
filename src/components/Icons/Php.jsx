import php from "../../assets/SkillsIcons/php.png"
import { useNavigate } from "react-router-dom"

const Php = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/Php')} src={php} alt="php" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default Php
