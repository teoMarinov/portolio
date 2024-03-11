import mongoDb from "../../assets/SkillsIcons/mongo.png"
import { useNavigate } from "react-router-dom"

const MongoDb = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/MongoDb')} src={mongoDb} alt="mongoDb" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default MongoDb
