import { HostelRoomWrapper } from "../../../Styles/HostelStyle";

const HostelRoomsPage = () => {
    return (
        <>
            <HostelRoomWrapper>
                <div className="page_head">
                    <h2>Hostel Rooms Directory</h2>
                    <div className="add_btn">
                        <button>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add New Room</p>
                        </button>
                    </div>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        <li className="active">Living Rooms</li>
                        <li>Sick Rooms</li>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Sl.No.</th>
                                <th>Room No.</th>
                                <th>Building</th>
                                <th>Bed Count</th>
                                <th>Occupied</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>11A</td>
                                <td>H1-056</td>
                                <td>25</td>
                                <td>2</td>
                                <td>Ac</td>
                                <td>
                                    <a className="view_btn"><i className="fa-solid fa-eye"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </HostelRoomWrapper>
        </>
    );
}

export default HostelRoomsPage;