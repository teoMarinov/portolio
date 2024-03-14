import ProjectInfoTamplate from "./ProjectInfoTamplate"

import typeScript from "../../../assets/SkillsIcons/typeScript.png"
import react from "../../../assets/SkillsIcons/react.png"
import chakraUi from "../../../assets/SkillsIcons/chakraUI.png"
import mySql from "../../../assets/SkillsIcons/mysql.svg"
import sql from "../../../assets/SkillsIcons/sql.png"
import php from "../../../assets/SkillsIcons/php.png"

const Rettid = () => {
    const description = [
        "Reddit clone",
        "MySql database",
        "Php api",
        "React front end"
    ]
    return (
        <ProjectInfoTamplate
            title='Rettid'
            description={description}
            gitHub={'https://github.com/teoMarinov/rettid'}
        >
            <img src={typeScript} alt="type-script" />
            <img src={react} alt="react" />
            <img src={chakraUi} alt="chakraUi" />
            <img src={mySql} alt="mySql" />
            <img src={sql} alt="sql" className="-mt-3" />
            <img src={php} alt="php" />

        </ProjectInfoTamplate>
    )
}

export default Rettid
