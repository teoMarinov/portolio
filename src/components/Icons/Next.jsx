import next from "../../assets/SkillsIcons/nextjs.png"
import { useNavigate } from "react-router-dom"

const Next = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/next')} src={next} alt="nextjs" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default Next
