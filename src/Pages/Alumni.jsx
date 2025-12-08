import { AlumniWrapper } from "../Styles/AlumniStyle";

const AlumniPage = () => {
    return (
        <>
            <AlumniWrapper>
                <div className="page_head">
                    <h2>Passed Out / Exited Students</h2>
                </div>
                <div className="filter_search_sec">
                    <div className="search_sec">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search by Mobile Number" />
                    </div>
                    <div className="filter_sec">
                        <div className="filter_btn">
                            <p>Select Batch</p>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                        <div className="filter_dropdown"></div>
                    </div>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        <li className="active">Passed Out</li>
                        <li>Exited</li>
                    </div>
                </div>
            </AlumniWrapper>
        </>
    );
}

export default AlumniPage;