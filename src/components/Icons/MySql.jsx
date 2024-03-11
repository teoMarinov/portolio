import mySql from "../../assets/SkillsIcons/mysql.svg"
import { useNavigate } from "react-router-dom"

const MySql = () => {
    const nav = useNavigate()
    return (
        <img onClick={() => nav('/MySql')} src={mySql} alt="mySql" className="transition-all hover:-translate-y-5 cursor-pointer" />
    )
}

export default MySql
