import { RolePermissionWrapper } from "../../../Styles/SettingStyle";

const RolesPermissionsPage = () => {
    return (
        <>
            <RolePermissionWrapper>
                <div className="page_head">
                    <h2>Role & Permission</h2>
                    <div className="add_btn">
                        <button>
                            <i className="fa-solid fa-plus"></i>
                            <p>Create Role</p>
                        </button>
                    </div>
                </div>
                <div className="role_levels">
                    <div className="box_items">
                        <div className="role_item">
                            <div className="item_inner">
                                <div className="inner_top">
                                    <a><i className="fa-brands fa-creative-commons-by"></i></a>
                                    <div className="inner_content">
                                        <h6>Admin</h6>
                                    </div>
                                </div>
                                <div className="inner_btn">
                                    <button className="edit"><i className="fa-solid fa-pen-to-square"></i>Edit</button>
                                    <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                </div>
                                <div className="bottom_part">
                                    <a>Assigned Members</a>
                                    <div className="students">
                                        <ul>
                                            <li><p>PB</p></li>
                                            <li><img src="/images/profile-image.png" alt="" /></li>
                                            <li><p>AK</p></li>
                                        </ul>
                                        <span>+25</span>
                                    </div>
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