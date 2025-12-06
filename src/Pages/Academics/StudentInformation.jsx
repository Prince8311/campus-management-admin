import { StudentInformationWrapper } from "../../Styles/AcademicStyle";

const StudentInformationPage = () => {
    return (
        <>
            <StudentInformationWrapper>
                <div className="page_head">
                    <h2>Student Directory</h2>
                </div>
                <div className="student_search_sec">
                    <div className="search_sec">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search by Mobile Number" />
                    </div>
                    <div className="filter_sec">
                        <div className="filter_btn">
                            <p>Select Class</p>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                        <div className="filter_dropdown"></div>
                    </div>
                    <div className="add_btn">
                        <button>
                            <i className="fa-solid fa-plus"></i>
                            <p>Create Employee</p>
                        </button>
                    </div>
                </div>
            </StudentInformationWrapper>
        </>
    );
}

export default StudentInformationPage;