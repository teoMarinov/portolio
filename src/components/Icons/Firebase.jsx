import firebase from "../../assets/SkillsIcons/firebase.png"
import { useNavigate } from "react-router-dom"

const Firebase = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/Firebase')} src={firebase} alt="firebase" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default Firebase
