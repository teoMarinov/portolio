import reactNative from "../../assets/SkillsIcons/reactNative.png"
import { useNavigate } from "react-router-dom"

const Reactnative = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/ReactNative')} src={reactNative} alt="react-native" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default Reactnative
