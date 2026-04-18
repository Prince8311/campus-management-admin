import { useState } from "react";
import { UserData } from "../../../Context/PageContext";
import { AddRolePermissionWrapper } from "../../../Styles/SettingStyle";
import Permissions from "../../../Data/Permissions.json";

const AddRolePermissionPage = () => {
    const { userDetails } = UserData();
    const userType = userDetails?.user_type;
    const userPermissions = Permissions.find(perm => perm.key === userType);
    const modules = userPermissions?.modules || [];
    const [activeModuleIndex, setActiveModuleIndex] = useState(0);
    const [roleName, setRoleName] = useState("");
    const [isActive, setIsActive] = useState(true);
    const [checkedPermissions, setCheckedPermissions] = useState([]);

    const handlePermissionToggle = (permissionId) => {
        setCheckedPermissions((prev) =>
            prev.includes(permissionId)
                ? prev.filter((key) => key !== permissionId)
                : [...prev, permissionId]
        );
    };

    const checkedKeys = checkedPermissions.join(",");
    const canSave = roleName.trim() !== "" && checkedPermissions.length > 0;

    const handleSaveRole = () => {
        const payload = {
            role_name: roleName,
            permissions: checkedKeys,
            status: isActive,
        };

        console.log("Role payload", payload);
        // TODO: submit this payload to your API
    };

    return (
        <AddRolePermissionWrapper>
            <div className="page_head">
                <div className="left_sec">
                    <h2>Create New Role</h2>
                    <p>Define institutional responsibilities by grouping specific module permissions into custom administrative roles.</p>
                </div>
                <div className="btn_sec">
                    <button type="button">Cancel</button>
                    <button type="button" onClick={handleSaveRole} disabled={!canSave}>
                        <i className="fa-solid fa-floppy-disk"></i>
                        <p>Save Role</p>
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
                                    <a>Select All</a>
                                    <a>Deselect All</a>
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