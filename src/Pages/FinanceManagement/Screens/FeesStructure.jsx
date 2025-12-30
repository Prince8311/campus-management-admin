import { FeesStructureWrapper } from "../../../Styles/FinanceStyle";

const FeesStructurePage = () => {
    return (
        <>
            <FeesStructureWrapper>
                <div className="page_head">
                    <h2>Fees Structure</h2>
                    <div className="add_btn">
                        <button>
                            <i className="fa-solid fa-plus"></i>
                            <p>Create Structure</p>
                        </button>
                    </div>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        <li className="active">Primary</li>
                        <li>Middle</li>
                        <li>Secondary</li>
                    </div>
                </div>
                <div className="fees_structure_levels">
                    <div className="level_box">
                        <div className="top_part active">
                            <div className="left_info">
                                <li>
                                    <p>Class - 1</p>
                                </li>
                            </div>
                            <div className="icon"><i className="fa-solid fa-angle-right"></i></div>
                        </div>
                        <div className="bottom_part">
                            <div className="bottom_inner">
                                <div className="table_sec">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Fees Type</th>
                                                <th>Amount</th>
                                                <th>Installments</th>
                                                <th>Tax</th>
                                                <th>Applicable To</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Tution Fees
                                                </td>
                                                <td>30000</td>
                                                <td>
                                                    <li>
                                                        <p>2</p>
                                                        <i className="fa-solid fa-circle-info"></i>
                                                    </li>
                                                </td>
                                                <td>
                                                    0.00
                                                </td>
                                                <td>
                                                    Existing Students
                                                </td>
                                                <td>
                                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="level_box">
                        <div className="top_part">
                            <div className="left_info">
                                <li>
                                    <p>Class - 2</p>
                                </li>
                            </div>
                            <div className="icon"><i className="fa-solid fa-angle-right"></i></div>
                        </div>
                    </div>
                    <div className="level_box">
                        <div className="top_part">
                            <div className="left_info">
                                <li>
                                    <p>Class - 3</p>
                                </li>
                            </div>
                            <div className="icon"><i className="fa-solid fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
            </FeesStructureWrapper>
        </>
    );
}

export default FeesStructurePage;