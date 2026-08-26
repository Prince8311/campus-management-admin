import { useEffect, useState } from "react";
import { DiscountModalWrapper } from "../../../Styles/Modals/FinanceModalsStyle";
import { toast } from "react-toastify";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import SkeletonLoader from "../../Loader/SkeletonLoader";
import ButtonLoader from "../../Loader/ButtonLoader";

const DiscountModal = ({ isOpenDiscountModal, setIsDiscountModal, refreshDiscounts }) => {
    const api = getApiEndpoints();

    const [isFeeTypesLoading, setIsFeeTypesLoading] = useState(false);
    const [feeTypes, setFeeTypes] = useState([]);
    const [showFeeTypeDropdown, setShowFeeTypeDropdown] = useState(false);
    const [selectedFeeType, setSelectedFeeType] = useState('');
    const [discountName, setDiscountName] = useState('');
    const [discountAmount, setDiscountAmount] = useState('');
    const isFormValid = discountName.trim() !== '' && discountAmount.trim() !== '' && selectedFeeType.trim() !== '';

    function closeModal() {
        setIsDiscountModal(false);
    }

    const fetchFeeTypes = async () => {
        setIsFeeTypesLoading(true);
        try {
            const response = await axiosInstance.get(api.fetchFeeTypes);
            if (response.data.status === 200) {
                setFeeTypes(response.data.types);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsFeeTypesLoading(false);
        }
    }

    useEffect(() => {
        if (showFeeTypeDropdown) {
            fetchFeeTypes();
        }
    }, [showFeeTypeDropdown]);

    const handleSelectFeeType = (type) => {
        setSelectedFeeType(type);
        setShowFeeTypeDropdown(false);
    }

    const handleFeeTypeDropdown = () => {
        setShowFeeTypeDropdown(!showFeeTypeDropdown);
    }

    const handleSaveDiscount = async (e) => {
        e.preventDefault();
        setIsFeeTypesLoading(true);
        const payload = {
            name: discountName,
            amount: discountAmount,
            feeType: selectedFeeType
        };
        try {
            const response = await axiosInstance.post(api.insertFeeDiscount, payload, {
                params: {
                    intent: 'add'
                }
            });
            if (response.data.status === 200) {
                toast.success(response.data.message);
                closeModal();
                refreshDiscounts();
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsFeeTypesLoading(false);
        }
    }

    return (
        <>
            <DiscountModalWrapper className={isOpenDiscountModal ? 'active' : ''}>
                <div className={`modal_box ${isOpenDiscountModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Discount</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box fullwidth">
                                <span>Discount Name <p>*</p></span>
                                <input type="text" value={discountName} onChange={(e) => setDiscountName(e.target.value)} />
                            </div>
                            <div className="input_box halfwidth">
                                <span>Discount Amount <p>*</p></span>
                                <input type="text" value={discountAmount} onChange={(e) => setDiscountAmount(e.target.value)} />
                            </div>
                            <div className="select_box halfwidth">
                                <span>Fee Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={handleFeeTypeDropdown}>
                                        <p>{selectedFeeType}</p>
                                        <i className={`fa-solid fa-angle-down ${showFeeTypeDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showFeeTypeDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    isFeeTypesLoading ? (
                                                        Array.from({ length: 2 }).map((_, index) => (
                                                            <li key={index}>
                                                                <SkeletonLoader width="100%" height="13px" />
                                                            </li>
                                                        ))
                                                    ) : feeTypes.length > 0 ? (
                                                        feeTypes.map((fee, i) => (
                                                            <li key={i}
                                                                onClick={() => handleSelectFeeType(fee)}
                                                                className={selectedFeeType === fee ? 'active' : ''}
                                                            >
                                                                {fee}
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <li className="empty_message">No fee types available</li>
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
                        <button disabled={!isFormValid || isFeeTypesLoading} onClick={handleSaveDiscount}>
                            {
                                isFeeTypesLoading ? (
                                    <ButtonLoader />
                                ) : (
                                    <>Save</>
                                )
                            }
                        </button>
                    </div>
                </div>
            </DiscountModalWrapper>
        </>
    );
}

export default DiscountModal;