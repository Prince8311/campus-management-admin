import { useEffect, useMemo, useState } from "react";
import { NewLibraryMemberWrapper } from "../../../Styles/Modals/LibraryManagementStyle";
import { toast } from "react-toastify";
import { getApiEndpoints, profileImageBaseURL } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import ButtonLoader from "../../Loader/ButtonLoader";

const NewLibraryMemberModal = ({ isOpenNewMemberModal, setIsOpenNewMemberModal, members, refreshData }) => {
    const api = getApiEndpoints();
    const [users, setUsers] = useState([]);
    const [userSearchInput, setUserSearchInput] = useState('');
    const [selectedUser, setSelectedUser] = useState({});
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const availableUsers = useMemo(() => {
        return users.filter((user) => !members?.some((member) => (
            String(member.user_id) === String(user.id)
            && String(member.user_type || '').trim().toLowerCase()
                === String(user.type || '').trim().toLowerCase()
        )));
    }, [users, members]);

    function closeModal() {
        setIsOpenNewMemberModal(false);
        setSelectedUser({});
        setUserSearchInput('');
        setShowUserDropdown(false);
    }

    const getInitials = (name) => {
        if (!name) return "";
        const parts = name.trim().split(" ").filter(Boolean);
        const first = parts[0]?.[0] || "";
        const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
        return (first + last).toUpperCase();
    };

    const fetchUsers = async () => {
        try {
            const respose = await axiosInstance.get(api.fetchAllUsers, {
                params: {
                    search: userSearchInput
                }
            });
            if (respose?.data.status === 200) {
                setUsers(respose?.data.users);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (isOpenNewMemberModal) {
            fetchUsers();
        }
    }, [isOpenNewMemberModal, userSearchInput]);

    const toggleUserDropdown = () => {
        setShowUserDropdown(!showUserDropdown);
    };

    const handleSelectUser = (user) => {
        if (selectedUser.id === user.id) return;
        setSelectedUser(user);
        setShowUserDropdown(false);
    }

    const handleAddMember = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = {
            memberUserId: selectedUser.id,
            memberUserType: selectedUser.type,
            enrollId: selectedUser.enroll_id,
            memberUserEmail: selectedUser.email,
            memberUsername: selectedUser.name,
        };
        try {
            const response = await axiosInstance.post(api.addLibraryMember, payload);
            if (response.data.status === 200) {
                toast.success(response.data.message);
                closeModal();
                refreshData();
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
        }
    }

    return (
        <>
            <NewLibraryMemberWrapper className={isOpenNewMemberModal ? 'active' : ''}>
                <div className={`modal_box ${isOpenNewMemberModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add New Member</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box halfwidth">
                                <span>Select User <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleUserDropdown}>
                                        <p>{selectedUser.name || ''}</p>
                                        <i className={`fa-solid fa-angle-down ${showUserDropdown ? "active" : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showUserDropdown ? "active" : ''}`}>
                                        <div className="dropdown_inner">
                                            <div className="search_sec">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                <input
                                                    type="text"
                                                    placeholder="Search by Resident Name..."
                                                    value={userSearchInput}
                                                    onChange={(e) => setUserSearchInput(e.target.value)}
                                                />
                                            </div>
                                            <ul>
                                                {availableUsers.length === 0 && (
                                                    <li className="no_data">No users available</li>
                                                )}
                                                {availableUsers.map((user) => (
                                                    <li
                                                        key={`${user.type}-${user.id}`}
                                                        className={`user_box ${selectedUser.id === user.id ? "active" : ""}`}
                                                        onClick={() => handleSelectUser(user)}
                                                    >
                                                        <div className="box_left">
                                                            {user.image ? (
                                                                <img
                                                                    src={`${profileImageBaseURL}/${user.directory}/${user.image}`}
                                                                    alt={user.name}
                                                                />
                                                            ) : (
                                                                <h6>{getInitials(user.name)}</h6>
                                                            )}
                                                        </div>

                                                        <div className="box_right">
                                                            <p>{user.name}</p>
                                                            <span>#{user.enroll_id}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box halfwidth">
                                <span>Contact No. <p>*</p></span>
                                <input type="text" value={selectedUser.phone || ''} readOnly />
                            </div>
                            <div className="input_box fullwidth">
                                <span>Email Address <p>*</p></span>
                                <input type="text" value={selectedUser.email || ''} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button
                            disabled={!selectedUser.id || isButtonLoading}
                            onClick={handleAddMember}
                        >
                            {isButtonLoading ? <ButtonLoader /> : "Save"}
                        </button>
                    </div>
                </div>
            </NewLibraryMemberWrapper>
        </>
    );
}

export default NewLibraryMemberModal;
