import websocket from "../../assets/SkillsIcons/websocket.png"
import { useNavigate } from "react-router-dom"

const Websocket = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/Websocket')} src={websocket} alt="websocket" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default Websocket
