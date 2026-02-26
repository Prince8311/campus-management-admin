import { useState } from "react";
import { CreateFieldsWrapper } from "../../../Styles/SettingModalStyle";

const CreateFieldsModal = ({ isCreateFieldsOpen, setIsCreateFieldsOpen }) => {
    const [name, setName] = useState('');
    const types = [
        {key: 'textbox', value: 'Text'},
        {key: 'number', value: 'Number'},
        {key: 'date', value: 'Date'},
        {key: 'dropdown', value: 'Dropdown'},
        {key: 'multi-select-dropdown', value: 'Multi-select Dropdown'},
    ];
    const [selectedType, setSelectedType] = useState({});
    const [showTypesDropdown, setShowTypesDropdown] = useState(false);
    const isFormValid = name.trim() !== '' && selectedType.key;

    function closeModal() {
        setName('');
        setSelectedType({});
        setIsCreateFieldsOpen(false);
    }

    const handleSelectType = (type) => {
        if(type !== selectedType) {
            setSelectedType(type);
            setShowTypesDropdown(false);
        }
    }

    return (
        <>
            <CreateFieldsWrapper className={isCreateFieldsOpen ? 'active' : ''}>
                <div className={`modal_box ${isCreateFieldsOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Create custom field - Address Details</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Field Name <p>*</p></span>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="select_box">
                                <span>Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={() => setShowTypesDropdown(!showTypesDropdown)}>
                                        <p>{selectedType.value}</p>
                                        <i className={`fa-solid fa-angle-down ${showTypesDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showTypesDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    types.map((type, i) =>
                                                        <li key={i} className={selectedType.key === type.key ? 'active' : ''} onClick={() => handleSelectType(type)}>{type.value}</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <div className="toggle_bar">
                            <input type="checkbox" id="toggle" />
                            <label htmlFor="toggle">
                                <span></span>
                            </label>
                        </div>
                        <p>Make this field mandatory</p>
                        <button disabled={!isFormValid}>Save</button>
                    </div>
                </div>
            </CreateFieldsWrapper>
        </>
    )
};

export default CreateFieldsModal;