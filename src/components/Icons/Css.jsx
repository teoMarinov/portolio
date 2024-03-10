import css from "../../assets/SkillsIcons/css.png"
import { useNavigate } from "react-router-dom"

const Css = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/css')} src={css} alt="css" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default Css
