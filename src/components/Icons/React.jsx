import react from "../../assets/SkillsIcons/react.png"
import { useNavigate } from "react-router-dom"

const React = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/react')} src={react} alt="react" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default React
