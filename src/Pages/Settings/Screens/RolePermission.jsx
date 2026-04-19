import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RolePermissionWrapper } from "../../../Styles/SettingStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import CircleLoader from "../../../Components/Loader/CircleLoader";

const RolesPermissionsPage = () => {
    const api = getApiEndpoints();
    const navigate = useNavigate();
    const [isInitialrolesLoading, setIsInitialrolesLoading] = useState(true);
    const [rolesPermissions, setRolesPermissions] = useState([]);
    const [deleteButtonLoading, setDeleteButtonLoading] = useState(false);
    const [selectedRoles, setSelectedRoles] = useState([]);

    const fetchRolesPermissions = async (showSkeleton = false) => {
        if (showSkeleton) {
            setIsInitialrolesLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchRoles);
            if (response?.data.status === 200) {
                setRolesPermissions(response.data.roles);
                setSelectedRoles([]);
                console.log("Roles & Permissions:", response.data.roles);
            }
        } catch (error) {
            setRolesPermissions([]);
            setSelectedRoles([]);
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialrolesLoading(false);
        }
    };

    useEffect(() => {
        fetchRolesPermissions(true);
    }, []);

    const handleDeleteRole = async (roleId) => {
        setDeleteButtonLoading(true);
        try {
            const response = await axiosInstance.post(api.deleteRole, {
                id: roleId
            });
            if (response?.data.status === 200) {
                toast.success(response?.data.message);
                fetchRolesPermissions(false);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setDeleteButtonLoading(false);
        }
    }

    const handleEditRole = (roleId, roleName) => {
        sessionStorage.setItem('selectedRoleId', roleId);
        navigate(`/admin/settings/role/${roleName}`);
    };

    return (
        <>
            <RolePermissionWrapper>
                <div className="page_head">
                    <h2>Role & Permission</h2>
                    <div className="add_btn">
                        <Link to="/admin/settings/add-roles-permissions">
                            <i className="fa-solid fa-plus"></i>
                            <p>Create Role</p>
                        </Link>
                    </div>
                </div>
                <div className="role_levels">
                    <div className="box_items">
                        {
                            isInitialrolesLoading ? (
                                Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i} className="role_item">
                                        <SkeletonLoader width="100%" height="110px" />
                                    </div>
                                ))
                            ) : rolesPermissions.length > 0 ? (
                                rolesPermissions.map((role, i) =>
                                    <div className="role_item" key={i}>
                                        <div className="item_inner">
                                            <div className="inner_top">
                                                <a><i className="fa-brands fa-creative-commons-by"></i></a>
                                                <h6>{role.role_name}</h6>
                                                <span>{role.user_count} Member{(role.user_count !== 0 && role.user_count !== 1) ? 's' : ''}</span>
                                            </div>
                                            <div className="inner_btn">
                                                <button className="edit" onClick={() => handleEditRole(role.id, role.role_name)}><i className="fa-solid fa-pen-to-square"></i>Edit</button>
                                                <button className="delete" onClick={() => handleDeleteRole(role.id)} disabled={deleteButtonLoading}>
                                                    {
                                                        deleteButtonLoading ? <CircleLoader width="10px" height="10px" color="redColor" /> : <i className="fa-solid fa-trash"></i>
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ) : (
                                <div className="empty_box">
                                    <img src="/images/no-fields.svg" alt="" />
                                    <p>No Data available.</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </RolePermissionWrapper>
        </>
    );
}

export default RolesPermissionsPage;