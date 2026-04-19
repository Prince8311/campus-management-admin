import { useState, useEffect } from "react";
import { UserData } from "../../../Context/PageContext";
import { AddRolePermissionWrapper } from "../../../Styles/SettingStyle";
import Permissions from "../../../Data/Permissions.json";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import ButtonLoader from "../../../Components/Loader/ButtonLoader";
import { useNavigate, useParams } from "react-router-dom";

const AddRolePermissionPage = () => {
    const api = getApiEndpoints();
    const navigate = useNavigate();
    const { roleName: paramRoleName } = useParams();
    const { userDetails } = UserData();
    const userType = userDetails?.user_type;
    const userPermissions = Permissions.find(perm => perm.key === userType);
    const modules = userPermissions?.modules || [];
    const [activeModuleIndex, setActiveModuleIndex] = useState(0);
    const [roleId, setRoleId] = useState(null);
    const [roleName, setRoleName] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [checkedPermissions, setCheckedPermissions] = useState([]);
    const [initialRoleName, setInitialRoleName] = useState("");
    const [initialIsActive, setInitialIsActive] = useState(false);
    const [initialCheckedPermissions, setInitialCheckedPermissions] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handlePermissionToggle = (permissionId) => {
        setCheckedPermissions((prev) =>
            prev.includes(permissionId)
                ? prev.filter((key) => key !== permissionId)
                : [...prev, permissionId]
        );
    };

    const getAllPermissionIds = () => {
        const permissionTypes = ["VIEW", "CREATE", "EDIT", "DELETE"];
        return modules.flatMap((module) =>
            module.sub_modules.flatMap((sub) =>
                permissionTypes.map((type) => `${sub.key}_${type}`)
            )
        );
    };

    useEffect(() => {
        if (paramRoleName) {
            const storedRoleId = sessionStorage.getItem("selectedRoleId");
            fetchRoleDetails(paramRoleName);
            setIsEditMode(true);
        }
    }, [paramRoleName]);

    const fetchRoleDetails = async (name) => {
        setIsLoading(true);
        try {
            const response = await axiosInstance.get(api.fetchRoleDetails, {
                params: { roleName: name }
            });
            if (response?.data.status === 200 && response?.data.details) {
                const details = response.data.details;
                setRoleName(details.role_name || "");
                setIsActive(Boolean(details.status));

                const permissions = details.permissions;
                console.log("Fetched Role Permissions:", response);
                if (Array.isArray(permissions)) {
                    setCheckedPermissions(permissions);
                    setInitialCheckedPermissions(permissions);
                } else if (typeof permissions === "string") {
                    const parsedPermissions = permissions.split(",").map((item) => item.trim()).filter(Boolean);
                    setCheckedPermissions(parsedPermissions);
                    setInitialCheckedPermissions(parsedPermissions);
                } else if (permissions && typeof permissions === "object") {
                    const flattenPermissions = Object.values(permissions).flat();
                    const parsedPermissions = Array.isArray(flattenPermissions) ? flattenPermissions : [];
                    setCheckedPermissions(parsedPermissions);
                    setInitialCheckedPermissions(parsedPermissions);
                } else {
                    setCheckedPermissions([]);
                    setInitialCheckedPermissions([]);
                }
                setInitialRoleName(details.role_name || "");
                setInitialIsActive(Boolean(details.status));
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
            navigate("/admin/settings/roles-permissions", { replace: true });
        } finally {
            setIsLoading(false);
        }
    };

    const handleSelectAll = () => {
        setCheckedPermissions(getAllPermissionIds());
    };

    const handleDeselectAll = () => {
        setCheckedPermissions([]);
    };

    const arraysAreEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) return false;
        const sorted1 = [...arr1].slice().sort();
        const sorted2 = [...arr2].slice().sort();
        return sorted1.every((value, index) => value === sorted2[index]);
    };

    const checkedKeys = checkedPermissions.join(",");
    const isFormValid = roleName.trim() !== "" && checkedPermissions.length > 0;
    const hasChanges = isEditMode && (
        roleName !== initialRoleName ||
        isActive !== initialIsActive ||
        !arraysAreEqual(checkedPermissions, initialCheckedPermissions)
    );
    const canSave = isFormValid && (!isEditMode || hasChanges);

    const handleSaveRole = async () => {
        setIsSubmitting(true);
        const payload = {
            role_name: roleName,
            permissions: checkedKeys,
            status: isActive,
        };
        if (isEditMode && roleId) {
            payload.id = roleId;
        }

        try {
            const response = await axiosInstance.post(api.createUpdateRole, payload);
            console.log("Create Role Response:", response);
            if (response?.data.status === 200) {
                toast.success(response.data.message);
                navigate("/admin/settings/roles-permissions", { replace: true });
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AddRolePermissionWrapper>
            <div className="page_head">
                <div className="left_sec">
                    <h2>{isEditMode ? "Edit Role" : "Create New Role"}</h2>
                    <p>Define institutional responsibilities by grouping specific module permissions into custom administrative roles.</p>
                </div>
                <div className="btn_sec">
                    <button type="button" onClick={() => navigate("/admin/settings/roles-permissions")}>Cancel</button>
                    <button type="button" onClick={handleSaveRole} disabled={!canSave || isSubmitting || isLoading}>
                        {
                            isSubmitting || isLoading ? <ButtonLoader /> : (
                                <>
                                    <i className="fa-solid fa-floppy-disk"></i>
                                    <p>{isEditMode ? "Update Role" : "Save Role"}</p>
                                </>
                            )
                        }
                    </button>
                </div>
            </div>
            <div className="page_content_sec">
                <div className="sec_inner">
                    <div className="left_sec">
                        <div className="left_inner">
                            <div className="left_box">
                                <div className="box_head">
                                    <div className="head_img">
                                        <img src="/images/role.svg" alt="" />
                                    </div>
                                    <h5>Role Information</h5>
                                </div>
                                <div className="box_items">
                                    <div className="input_box">
                                        <span>Role Name <p>*</p></span>
                                        <input
                                            type="text"
                                            value={roleName}
                                            onChange={(e) => setRoleName(e.target.value)}
                                            readOnly={isEditMode}
                                            disabled={isEditMode}
                                        />
                                    </div>
                                    <div className="info_box">
                                        <a><i className="fa-solid fa-circle-info"></i></a>
                                        <p>Roles that are inactive cannot be assigned to new users, but existing users will retain their access until manually updated.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="left_box">
                                <div className="box_head">
                                    <div className="head_img">
                                        <img src="/images/toggle.svg" alt="" />
                                    </div>
                                    <h5>Role Status</h5>
                                </div>
                                <div className="box_items">
                                    <div className="status_box">
                                        <div className="status_left">
                                            <p>Active Status</p>
                                            <span>Enable this role for assignment</span>
                                        </div>
                                        <div className="status_right">
                                            <div className="toggle_bar">
                                                <input
                                                    type="checkbox"
                                                    id="toggle"
                                                    checked={isActive}
                                                    onChange={(e) => setIsActive(e.target.checked)}
                                                />
                                                <label htmlFor="toggle">
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right_sec">
                        <div className="right_inner">
                            <div className="right_head">
                                <div className="head_left_sec">
                                    <div className="top_sec">
                                        <div className="sec_img">
                                            <img src="/images/permission.svg" alt="" />
                                        </div>
                                        <h5>Permissions Matrix</h5>
                                    </div>
                                    <p>Control access to modules and sub-features</p>
                                </div>
                                <div className="head_right_sec">
                                    <a onClick={handleSelectAll} role="button">Select All</a>
                                    <a onClick={handleDeselectAll} role="button">Deselect All</a>
                                </div>
                            </div>
                            <div className="right_body_sec">
                                <div className="body_inner">
                                    {modules.map((module, index) => (
                                        <div className="role_box" key={module.id}>
                                            <div
                                                className={`top_part ${index === activeModuleIndex ? 'active' : ''}`}
                                                onClick={() => setActiveModuleIndex(index)}
                                            >
                                                <div className="top_left">
                                                    <div className="role_icon">
                                                        <i className="fa-solid fa-graduation-cap"></i>
                                                    </div>
                                                    <p>{module.name}</p>
                                                </div>
                                                <div className="top_right">
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </div>
                                            </div>
                                            <div className={`bottom_part ${index === activeModuleIndex ? 'active' : ''}`}>
                                                <div className="bottom_inner">
                                                    <div className="table_sec">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Module</th>
                                                                    <th>View</th>
                                                                    <th>Create</th>
                                                                    <th>Edit</th>
                                                                    <th>Delete</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {module.sub_modules.map((sub) => {
                                                                    const permissionTypes = ["VIEW", "CREATE", "EDIT", "DELETE"];
                                                                    return (
                                                                        <tr key={sub.key}>
                                                                            <td>{sub.value}</td>
                                                                            {permissionTypes.map((type) => {
                                                                                const permissionId = `${sub.key}_${type}`;
                                                                                return (
                                                                                    <td key={permissionId}>
                                                                                        <li>
                                                                                            <input
                                                                                                type="checkbox"
                                                                                                id={permissionId}
                                                                                                checked={checkedPermissions.includes(permissionId)}
                                                                                                onChange={() => handlePermissionToggle(permissionId)}
                                                                                            />
                                                                                            <label htmlFor={permissionId}>
                                                                                                <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                                                                            </label>
                                                                                        </li>
                                                                                    </td>
                                                                                );
                                                                            })}
                                                                        </tr>
                                                                    );
                                                                })}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AddRolePermissionWrapper>
    );
}

export default AddRolePermissionPage;