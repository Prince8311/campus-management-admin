import { ModulePriceWrapper } from "../../../Styles/SettingStyle";
import Permissions from "../../../Data/Permissions.json";

const ModulePricePage = () => {
    const modules = Permissions.find((permission) => permission.key === "inst_admin")?.modules || [];

    return (
        <>
            <ModulePriceWrapper>
                <div className="Module_price_sec">
                    {modules.map((module) => (
                        <div className="module_box" key={module.id}>
                            <div className="box_inner">
                                <div className="top_part">
                                    <div className="part_content">
                                        <a><i className={`fa-solid ${module.icon}`}></i></a>
                                        <h6>{module.name}</h6>
                                    </div>
                                    <div className="description_sec">
                                        <p>{module.desc}</p>
                                    </div>
                                    <div className="sub_module_sec">
                                        <h6>Included SubModule({module.sub_modules.length})</h6>
                                        <ul>
                                            {module.sub_modules.map((subModule) => (
                                                <li key={subModule.key}>
                                                    <i className="fa-solid fa-circle"></i>
                                                    <span>{subModule.value}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="bottom_part">
                                    <h5>Price -<span>NA</span></h5>
                                    <div className="bottom_btn">
                                        <button className="edit">Configur Price</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ModulePriceWrapper>
        </>
    );
}

export default ModulePricePage;