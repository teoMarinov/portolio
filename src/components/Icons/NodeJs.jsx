import nodeJs from "../../assets/SkillsIcons/nodeJs.png"
import { useNavigate } from "react-router-dom"

const NodeJs = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/nodejs')} src={nodeJs} alt="nodejs" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default NodeJs
