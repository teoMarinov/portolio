import pusher from "../../assets/SkillsIcons/pusher.svg"
import { useNavigate } from "react-router-dom"

const Pusher = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/Pusher')} src={pusher} alt="pusher" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default Pusher
