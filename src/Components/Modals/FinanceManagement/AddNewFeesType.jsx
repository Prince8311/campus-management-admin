import { useEffect, useState } from "react";
import { AddNewFeesTypeWrapper } from "../../../Styles/Modals/FinanceModalsStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import ButtonLoader from "../../Loader/ButtonLoader";

const AddNewFeesTypeModal = ({ isAddNewFeesTypeOpen, setIsAddNewFeesTypeOpen }) => {
    const api = getApiEndpoints();
    const [items, setItems] = useState([]);
    const [originalItems, setOriginalItems] = useState([]);
    const [itemInput, setItemInput] = useState('');
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    function closeModal() {
        setIsAddNewFeesTypeOpen(false);
    }

    const fetchFeeTypes = async () => {
        try {
            const response = await axiosInstance.get(api.fetchFeeTypes);
            if (response?.data.status === 200) {
                setItems(response?.data.types || []);
                setOriginalItems(response?.data.types || []);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (isAddNewFeesTypeOpen) {
            fetchFeeTypes();
        }
    }, [isAddNewFeesTypeOpen]);

    const handleItemKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            const trimmedValue = itemInput.trim();
            if (!trimmedValue) return;

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

    const isChanged = JSON.stringify(items) !== JSON.stringify(originalItems);

    const handleAddFeesType = async () => {
        setIsButtonLoading(true);
        const payload = { types: JSON.stringify(items) };
        try {
            const response = await axiosInstance.post(api.createFeeType, payload);
            if (response?.data.status === 200) { 
                toast.success(response?.data.message);
                closeModal();
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false)
        }
    }

    return (
        <>
            <AddNewFeesTypeWrapper className={isAddNewFeesTypeOpen ? 'active' : ''}>
                <div className={`modal_box ${isAddNewFeesTypeOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add New Fees Structure</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="item_box">
                                <span>Fee Type<p>*</p><a>(Please press enter after typing each item name.)</a></span>
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
                                        className={items.length > 0 ? 'active' : ''}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button disabled={!isChanged || isButtonLoading} onClick={handleAddFeesType}>
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
            </AddNewFeesTypeWrapper>
        </>
    );
}

export default AddNewFeesTypeModal;