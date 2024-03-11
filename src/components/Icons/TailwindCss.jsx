import tailwind from "../../assets/SkillsIcons/tailwind.png"
import { useNavigate } from "react-router-dom"

const Tailwind = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/tailwind')} src={tailwind} alt="tailwind" className="transition-all hover:-translate-y-5 cursor-pointer mt-3" />
    )
}

export default Tailwind