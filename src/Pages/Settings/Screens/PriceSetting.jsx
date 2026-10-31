import { useState } from "react";
import { PriceSettingWrapper } from "../../../Styles/SettingStyle";
import ModulePricePage from "./ModulePrice";
import DocumentationPage from "./Documentation";

const PriceSettingPage = () => {
    const tabs = ['Price', 'Document'];
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    return (
        <>
            <PriceSettingWrapper>
                <div className="page_head">
                    <h2>Module Configaration</h2>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        {
                            tabs.map((tab, index) => (
                                <li
                                    key={index}
                                    className={selectedTab === tab ? 'active' : ''}
                                    onClick={() => setSelectedTab(tab)}
                                >
                                    {tab}
                                </li>
                            ))
                        }
                    </div>
                </div>
                {selectedTab === 'Price' && (<ModulePricePage />)}
                {selectedTab === 'Document' && (<DocumentationPage />)}
            </PriceSettingWrapper>
        </>
    );
}

export default PriceSettingPage;
