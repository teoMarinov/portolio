import SkillsInfoTamplate from "./SkillsInfoTamplate"
import data from "../../../common/allProjectsData"
const JavaScriptInfo = () => {
    const filteredData = data.filter((project) => project.stack.includes('JavaScript'))
    return (
        <div>
            <SkillsInfoTamplate title={'JavaScript'} level="Advanced" data={filteredData} />
        </div>
    )
}

export default JavaScriptInfo
