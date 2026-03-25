import { useState } from "react";
import SelectFeesStructureTypeModal from "../../../Components/Modals/FinanceManagement/SelectFeesStructureType";
import { FeesStructureWrapper } from "../../../Styles/FinanceStyle";
import AddNewFeesTypeModal from "../../../Components/Modals/FinanceManagement/AddNewFeesType";

const FeesStructurePage = () => {
    const tabs = []
    const [isFeesStructureOpen, setIsFeesStructureOpen] = useState(false);
    const [isAddNewFeesTypeOpen, setIsAddNewFeesTypeOpen] = useState(false);

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
                        <li className="active">Recurring Fee</li>
                        <li>One Time Fee</li>
                        <li>Transfort Fee</li>
                    </div>
                </div>
                <div className="fees_structure_levels">
                    <div className="level_box">
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
                    <div className="level_box">
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
                                        <li>1. May - <span>₹30000.00</span></li>
                                        <li>2. May - <span>₹30000.00</span></li>
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
                    <div className="level_box">
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
                                        <li>1. May - <span>₹30000.00</span></li>
                                        <li>2. May - <span>₹30000.00</span></li>
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
                    <div className="level_box">
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
                                        <li>1. May - <span>₹30000.00</span></li>
                                        <li>2. May - <span>₹30000.00</span></li>
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
                    <div className="level_box">
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
                                        <li>1. May - <span>₹30000.00</span></li>
                                        <li>2. May - <span>₹30000.00</span></li>
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