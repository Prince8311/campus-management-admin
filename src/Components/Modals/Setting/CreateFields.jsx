import { useState } from "react";
import { CreateFieldsWrapper } from "../../../Styles/SettingModalStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import ButtonLoader from "../../Loader/ButtonLoader";

const CreateFieldsModal = ({ isCreateFieldsOpen, setIsCreateFieldsOpen, refreshFormFields }) => {
    const api = getApiEndpoints();
    const sectionData = JSON.parse(localStorage.getItem("sectionData"));
    const [name, setName] = useState('');
    const types = [
        { key: 'textbox', value: 'Textbox' },
        { key: 'number', value: 'Number' },
        { key: 'date', value: 'Date' },
        { key: 'dropdown', value: 'Dropdown' },
        { key: 'multi-select-dropdown', value: 'Multi-select Dropdown' },
    ];
    const [selectedType, setSelectedType] = useState({});
    const [showTypesDropdown, setShowTypesDropdown] = useState(false);
    const [isRequired, setIsRequired] = useState(false);
    const isFormValid = name.trim() !== '' && selectedType.key;
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [itemInput, setItemInput] = useState('');

    function closeModal() {
        setName('');
        setSelectedType({});
        setItemInput('');
        setItems([]);
        setIsRequired(false);
        setShowTypesDropdown(false);
        setIsCreateFieldsOpen(false);
    }

    const handleSelectType = (type) => {
        if (type.key !== selectedType.key) {
            setSelectedType(type);
            setShowTypesDropdown(false);
        }
    }

    const handleItemKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            const trimmedValue = itemInput.trim();
            if (!trimmedValue) return;

            // Prevent duplicate values (optional but recommended)
            if (items.includes(trimmedValue)) {
                toast.error("Item already added");
                return;
            }

            setItems([...items, trimmedValue]);
            setItemInput('');
        }
    };

    const handleRemoveItem = (indexToRemove) => {
        setItems(items.filter((_, index) => index !== indexToRemove));
    };

    const handleAddFormField = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = {
            sectionId: sectionData.sectionId,
            fieldName: name,
            fieldType: selectedType.key,
            isRequired: isRequired
        };
        try {
            const response = await axiosInstance.post(api.createStudentFormFields, payload);
            if (response?.data.status === 200) {
                toast.success(response?.data.message);
                refreshFormFields();
                closeModal();
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
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
                            {
                                (selectedType.key === 'dropdown' || selectedType.key === 'multi-select-dropdown') &&
                                <div className="item_box">
                                    <span>Items<p>*</p><a>(Please press enter after typing each item name.)</a></span>
                                    <div className="box_content">
                                        {
                                            items.map((item, index) => (
                                                <li key={index}>
                                                    <p>{item}</p>
                                                    <span onClick={() => handleRemoveItem(index)}>
                                                        <i className="fa-solid fa-circle-xmark"></i>
                                                    </span>
                                                </li>
                                            ))
                                        }
                                        <input
                                            type="text"
                                            placeholder="Type item name"
                                            value={itemInput}
                                            onChange={(e) => setItemInput(e.target.value)}
                                            onKeyDown={handleItemKeyDown}
                                        />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="modal_btn">
                        <div className="toggle_bar">
                            <input
                                type="checkbox"
                                id="toggle"
                                checked={isRequired}
                                onChange={(e) => setIsRequired(e.target.checked)}
                            />
                            <label htmlFor="toggle">
                                <span></span>
                            </label>
                        </div>
                        <p>Make this field mandatory</p>
                        <button disabled={!isFormValid || isButtonLoading} onClick={handleAddFormField}>
                            {
                                isButtonLoading ? (
                                    <ButtonLoader />
                                ) : (
                                    <>Save</>
                                )
                            }
                        </button>
                    </div>
                </div>
            </CreateFieldsWrapper>
        </>
    )
};

export default CreateFieldsModal;