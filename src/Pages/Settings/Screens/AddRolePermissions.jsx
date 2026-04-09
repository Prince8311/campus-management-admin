import { AddRolePermissionWrapper } from "../../../Styles/SettingStyle";

const AddRolePermissionPage = () => {
    return (
        <AddRolePermissionWrapper>
            <div className="page_head">
                <div className="left_sec">
                    <h2>Create New Role</h2>
                    <p>Define institutional responsibilities by grouping specific module permissions into custom administrative roles.</p>
                </div>
                <div className="btn_sec">
                    <button>Cancel</button>
                    <button>
                        <i className="fa-solid fa-floppy-disk"></i>
                        <p>Save Role</p>
                    </button>
                </div>
            </div>
        </AddRolePermissionWrapper>
    );
}

export default AddRolePermissionPage;