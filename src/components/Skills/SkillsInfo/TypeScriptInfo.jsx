import SkillsInfoTamplate from "./SkillsInfoTamplate"
import data from "../../../common/allProjectsData"
const TypeScriptInfo = () => {
    const filteredData = data.filter((project) => project.stack.includes('TypeScript'))
    return (
        <div>
            <SkillsInfoTamplate title={'TypeScript'} level="Advanced" data={filteredData} />
        </div>
    )
}

export default TypeScriptInfo
