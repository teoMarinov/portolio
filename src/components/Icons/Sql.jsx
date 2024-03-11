import sql from "../../assets/SkillsIcons/sql.png"
import { useNavigate } from "react-router-dom"

const Sql = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/Sql')} src={sql} alt="sql" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default Sql