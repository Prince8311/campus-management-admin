import { ClassWiseWrapper } from "../../../Styles/ReportsStyle";

const ClassWisePage = () => {
    return (
        <>
            <ClassWiseWrapper>
                <div className="class_filter_sec">
                    <div className="filter_sec">
                        <div className="filter_btn">
                            <i className="fa-solid fa-filter"></i>
                            <p>Filter by</p>
                        </div>
                        <div className="filter_dropdown"></div>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>Section</th>
                                <th>Old Student</th>
                                <th>New Student</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>A</td>
                                <td>500</td>
                                <td>1000</td>
                                <td>1500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ClassWiseWrapper>
        </>
    );
}

export default ClassWisePage;