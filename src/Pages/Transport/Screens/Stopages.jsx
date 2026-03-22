import { StopagesWrapper } from "../../../Styles/TransportStyle";

const StopagesPage = () => {
    return (
        <>
            <StopagesWrapper>
                <div className="head_sec">
                    <h6>Stopages Derectory</h6>
                    <div className="filter_search_sec">
                        <div className="search_sec">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search by Stopages..." />
                        </div>
                        <div className="add_btn">
                            <button>
                                <i className="fa-solid fa-plus"></i>
                                <p>Add Stopage</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Stopage Name</th>
                                <th>Location</th>
                                <th>Distance</th>
                                <th>Passengers</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    New Town
                                </td>
                                <td>
                                    Kolkata, Sector-V, 700091
                                </td>
                                <td>1024km</td>
                                <td>65</td>
                                <td>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </StopagesWrapper>
        </>
    );
}

export default StopagesPage;