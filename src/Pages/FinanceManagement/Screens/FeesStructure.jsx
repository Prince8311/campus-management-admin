import { useEffect, useState } from "react";
import SelectFeesStructureTypeModal from "../../../Components/Modals/FinanceManagement/SelectFeesStructureType";
import { FeesStructureWrapper } from "../../../Styles/FinanceStyle";
import AddNewFeesTypeModal from "../../../Components/Modals/FinanceManagement/AddNewFeesType";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";

const FeesStructurePage = () => {
    const api = getApiEndpoints();
    const tabs = ['Recurring Fee', 'One Time Fee', 'Transfort Fee'];
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const [isFeeConfigurationsLoading, setIsFeeConfigurationsLoading] = useState(false);
    const [feeConfigurations, setFeeConfigurations] = useState([]);
    const [isFeesStructureOpen, setIsFeesStructureOpen] = useState(false);
    const [isAddNewFeesTypeOpen, setIsAddNewFeesTypeOpen] = useState(false);

    const fetchFeeConfigurations = async () => {
        setIsFeeConfigurationsLoading(true);
        try {
            const response = await axiosInstance.get(api.fetchFeeConfigurations, {
                params: { feeType: selectedTab }
            });
            if (response?.data.status === 200) {
                setFeeConfigurations(response?.data.configurations);
                console.log("Fesssssssssssssssssss", response?.data);
            }
        } catch (error) {
            setFeeConfigurations([]);
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsFeeConfigurationsLoading(false);
        }
    }

    useEffect(() => {
        if (selectedTab) {
            fetchFeeConfigurations();
        }
    }, [selectedTab]);

    const handleOpenFeesStructure = () => {
        setIsFeesStructureOpen(true);
    };

    const handleOpenAddNewFeesType = () => {
        setIsAddNewFeesTypeOpen(true);
    };

    return (
        <>
            <FeesStructureWrapper>
                <div className="page_head">
                    <h2>Fees Structure</h2>
                    <div className="add_btn">
                        <button onClick={handleOpenAddNewFeesType}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add Fees Type</p>
                        </button>
                        <button onClick={handleOpenFeesStructure}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Create Structure</p>
                        </button>
                    </div>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        {
                            tabs.map((tab, i) =>
                                <li
                                    key={i}
                                    className={selectedTab === tab ? 'active' : ''}
                                    onClick={() => setSelectedTab(tab)}
                                >
                                    {tab}
                                </li>
                            )
                        }
                    </div>
                </div>
                <div className="fees_structure_levels">
                    {
                        isFeeConfigurationsLoading ? (
                            Array.from({ length: 2 }).map((_, i) => (
                                <div key={i} className="level_box">
                                    <SkeletonLoader width="100%" height="180px" />
                                </div>
                            ))
                        ) : feeConfigurations.length > 0 ? (
                            feeConfigurations.map((feeConfiguration, i) =>
                                <div className="level_box" key={i}>
                                    <div className="box_inner">
                                        <div className="top_part">
                                            <div className="part_content">
                                                <a><i className="fa-solid fa-comment-dollar"></i></a>
                                                <h6>Tution Fees</h6>
                                                <span>New Students</span>
                                            </div>
                                            <a>Class - 1</a>
                                            <div className="fees_sec">
                                                <h6>Installments : </h6>
                                                <div className="installments_sec">
                                                    <li>1. May<span>₹30000.00</span></li>
                                                    <li>2. May<span>₹30000.00</span></li>
                                                </div>
                                            </div>
                                            <p>Receipt Serial No. : <span>SSA - 00</span></p>
                                        </div>
                                        <div className="bottom_btn">
                                            <div className="total_sec">
                                                <h5>Total : <span>₹100000.00</span></h5>
                                            </div>
                                            <div className="btns_sec">
                                                <button className="edit">Edit Name</button>
                                                <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        ) : (
                            <div className="empty_box"></div>
                        )
                    }
                </div>

                <SelectFeesStructureTypeModal
                    isFeesStructureOpen={isFeesStructureOpen}
                    setIsFeesStructureOpen={setIsFeesStructureOpen}
                />

                <AddNewFeesTypeModal
                    isAddNewFeesTypeOpen={isAddNewFeesTypeOpen}
                    setIsAddNewFeesTypeOpen={setIsAddNewFeesTypeOpen}
                />
            </FeesStructureWrapper>
        </>
    );
}

export default FeesStructurePage;