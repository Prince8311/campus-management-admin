import { useState, useEffect } from "react";
import AddInstitutionModal from "../../../Components/Modals/Institutions/AddInstitution";
import { InstitutionListWrapper } from "../../../Styles/InstitutionStyle";
import SelectAddressModal from "../../../Components/Modals/Setting/SelectAddress";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import Pagination from "../../../Components/Pagination";
import DeleteConfirmationModal from "../../../Components/Modals/DeleteConfirmation";

const InstitutionListPage = () => {
    const api = getApiEndpoints();
    const [isAddInstitutionOpen, setIsAddInstitutionOpen] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState('');
    const [showAddressModal, setShowAddressModal] = useState(false);

    const [institutions, setInstitutions] = useState([]);
    const [isInitialInstitutionsLoading, setIsInitialInstitutionsLoading] = useState(false);
    const [totalCount, setTotalCount] = useState('');
    const [searchInput, setSearchInput] = useState('');


    const fetchInstitutions = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialInstitutionsLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchInstitutions, {
                params: {
                    page: pageNumber,
                    search: searchInput
                }
            });
            if (response.data.status === 200) {
                console.log('Institutions:', response.data);
                setInstitutions(response?.data.institutions);
                setTotalCount(response.data.totalCount);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialInstitutionsLoading(false);
        }
    }

    useEffect(() => {
        fetchInstitutions(true);
    }, []);

    const handleOpenAddInstitutionModal = () => {
        setIsAddInstitutionOpen(true);
    };

    const handleEditInstitution = () => {
        setIsAddInstitutionOpen(true);
    }

    return (
        <>
            <InstitutionListWrapper>
                <div className="page_head">
                    <h2>Listed Institutions</h2>
                </div>
                <div className="student_search_sec">
                    <div className="search_sec">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search by Institutions name" />
                    </div>
                    <div className="add_btn">
                        <button onClick={handleOpenAddInstitutionModal}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add Institution</p>
                        </button>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Institution Name</th>
                                <th>Contact No.</th>
                                <th>Students</th>
                                <th>Staffs</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isInitialInstitutionsLoading ? (
                                    Array.from({ length: 2 }).map((_, i) => (
                                        <tr key={i}>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td>
                                                <SkeletonLoader width="15px" height="15px" margin="0 0 0 6px" />
                                                <SkeletonLoader width="15px" height="15px" />
                                            </td>
                                        </tr>
                                    ))
                                ) : institutions.length > 0 ? (
                                    institutions.map((institution, i) =>
                                        <tr key={i}>
                                            <td>{institution.inst_name}</td>
                                            <td>{institution.phone}</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>
                                                <p className={institution.status ? 'active' : ''}>{institution.status ? 'Active' : 'Inactive'}</p>
                                            </td>
                                            <td>
                                                <a className="edit_btn" onClick={() => handleEditInstitution()}>
                                                    <i className="fa-solid fa-pen-to-square"></i>
                                                </a>
                                                <a className="delete_btn">
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    )
                                ) : (
                                    <tr>
                                        <td className="empty_message">No institutions available.</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

                <AddInstitutionModal
                    isAddInstitutionOpen={isAddInstitutionOpen}
                    setIsAddInstitutionOpen={setIsAddInstitutionOpen}
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                    setShowAddressModal={setShowAddressModal}
                />

                <SelectAddressModal
                    isShowAddressModal={showAddressModal}
                    setIsShowAddressModal={setShowAddressModal}
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                />
            </InstitutionListWrapper>
        </>
    );
}

export default InstitutionListPage;