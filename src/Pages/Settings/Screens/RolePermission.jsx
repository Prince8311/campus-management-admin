import { Link } from "react-router-dom";
import { RolePermissionWrapper } from "../../../Styles/SettingStyle";

const RolesPermissionsPage = () => {
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
                        <div className="role_item">
                            <div className="item_inner">
                                <div className="inner_top">
                                    <a><i className="fa-brands fa-creative-commons-by"></i></a>
                                    <h6>Admin</h6>
                                    <span>1000 Members</span>
                                </div>
                                <div className="inner_btn">
                                    <button className="edit"><i className="fa-solid fa-pen-to-square"></i>Edit</button>
                                    <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RolePermissionWrapper>
        </>
    );
}

export default RolesPermissionsPage;