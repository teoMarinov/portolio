import git from "../../assets/SkillsIcons/git.png"
import { useNavigate } from "react-router-dom"

const Git = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/Git')} src={git} alt="git" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default Git
