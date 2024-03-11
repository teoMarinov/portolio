import chakraUi from "../../assets/SkillsIcons/chakraUI.png"
import { useNavigate } from "react-router-dom"

const ChakraUI = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/ChakraUI')} src={chakraUi} alt="chakraUI" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default ChakraUI