import { useState, useEffect } from "react";
import DiscountModal from "../../../Components/Modals/FinanceManagement/Discount";
import FineModal from "../../../Components/Modals/FinanceManagement/Fine";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import { DiscountFineWrapper } from "../../../Styles/FinanceStyle";
import DiscountPage from "./Discount";

const DiscountFinePage = () => {
    const { fetchFeeDiscounts } = getApiEndpoints();
    const [isOpenDiscountModal, setIsOpenDiscountModal] = useState(false);
    const [isdiscountLoading, setIsdiscountLoading] = useState(false);
    const [discounts, setDiscounts] = useState([]);
    const [selectedDiscount, setSelectedDiscount] = useState(null);
    const [isOpenFineModal, setIsOpenFineModal] = useState(false);
    const [fineDraft, setFineDraft] = useState(null);
    const [specialDiscounts, setSpecialDiscounts] = useState({
        staff: { enabled: false, name: 'Staff Child' },
        advance: { enabled: false, name: 'Advance Pay' }
    });
    const [activeSpecialDiscount, setActiveSpecialDiscount] = useState(null);

    const openSpecialDiscount = (key) => {
        setActiveSpecialDiscount(key);
        setSelectedDiscount(specialDiscounts[key]);
        setIsOpenDiscountModal(true);
    };
    const toggleSpecialDiscount = (key) => {
        if (specialDiscounts[key].enabled) {
            setSpecialDiscounts(previous => ({ ...previous, [key]: { ...previous[key], enabled: false } }));
        } else openSpecialDiscount(key);
    };
    const saveSpecialDiscount = (draft) => {
        setSpecialDiscounts(previous => ({ ...previous, [activeSpecialDiscount]: { ...draft, enabled: true } }));
    };

    const fetchDiscounts = async (showSkeleton = false) => {
        if (showSkeleton) {
            setIsdiscountLoading(true);
        }
        try {
            const response = await axiosInstance.get(fetchFeeDiscounts);
            if (response?.data.status === 200) {
                const discountList = response.data.discounts || response.data.data || [];
                setDiscounts(Array.isArray(discountList) ? discountList : []);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsdiscountLoading(false);
        }
    };
    useEffect(() => {
        fetchDiscounts(true);
    }, []);

    const handleOpenDiscountModal = () => {
        setActiveSpecialDiscount(null);
        setSelectedDiscount(null);
        setIsOpenDiscountModal(true);
    }

    const handleEditDiscount = (discount) => {
        setActiveSpecialDiscount(null);
        setSelectedDiscount(discount);
        setIsOpenDiscountModal(true);
    }

    const tabs = [
        { label: "Discount", value: "discounts" },
        { label: "Fine", value: "fines" }
    ];
    const [selectedTab, setSelectedTab] = useState(tabs[0].value);
    return (
        <>
            <DiscountFineWrapper>
                <div className="page_head">
                    <h2>Discount & Fine setup</h2>
                    <div className="add_btn">
                        {
                            selectedTab === "discounts" ? (
                                <button onClick={handleOpenDiscountModal}>
                                    <i className="fa-solid fa-tag"></i>
                                    <p>Create Discount</p>
                                </button>
                            ) : (
                                <button onClick={() => setIsOpenFineModal(true)}>
                                    <i className="fa-solid fa-receipt"></i>
                                    <p>Setup Fine</p>
                                </button>
                            )
                        }
                    </div>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        {tabs.map((tab) => (
                            <li
                                key={tab.value}
                                className={selectedTab === tab.value ? "active" : ""}
                                onClick={() => setSelectedTab(tab.value)}
                            >
                                {tab.label}
                            </li>
                        ))}
                    </div>
                </div>
                {selectedTab === "discounts" && (
                    <DiscountPage discounts={discounts} isdiscountLoading={isdiscountLoading} onEditDiscount={handleEditDiscount} specialDiscounts={specialDiscounts} onToggleSpecialDiscount={toggleSpecialDiscount} onEditSpecialDiscount={openSpecialDiscount} />
                )}
                <DiscountModal
                    isOpenDiscountModal={isOpenDiscountModal}
                    setIsOpenDiscountModal={setIsOpenDiscountModal}
                    selectedDiscount={selectedDiscount}
                    setSelectedDiscount={setSelectedDiscount}
                    refreshDiscounts={() => fetchDiscounts(false)}
                    fixedName={activeSpecialDiscount ? specialDiscounts[activeSpecialDiscount].name : ''}
                    onSaveDraft={activeSpecialDiscount ? saveSpecialDiscount : undefined}
                />
                <FineModal isOpenFineModal={isOpenFineModal} setIsOpenFineModal={setIsOpenFineModal} fineDraft={fineDraft} onSaveDraft={setFineDraft} />
            </DiscountFineWrapper>
        </>
    );
}

export default DiscountFinePage
