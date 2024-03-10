import html from "../../assets/SkillsIcons/html.png"
import { useNavigate } from "react-router-dom"

const Html = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/html')} src={html} alt="html" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default Html
