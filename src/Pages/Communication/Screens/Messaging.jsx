import { useState, useEffect } from "react";
import { MessagingWrapper } from "../../../Styles/CommunicationStyle";
import CreateMessageModal from "../../../Components/Modals/Communication/CreateMessage";
import { UserData } from "../../../Context/PageContext";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";

const MessagingPage = () => {
    const api = getApiEndpoints();
    const { userDetails } = UserData();
    const [templates, setTemplates] = useState([]);
    const [isMessageCreateModalOpen, setIsMessageCreateModalOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const tabs = ['Active', 'Requested'];
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const [isInitialTemplatesLoading, setIsInitialTemplatesLoading] = useState(false);

    const openMessageCreateModal = () => {
        setSelectedTemplate(null);
        setIsMessageCreateModalOpen(true);
    };

    const fetchMessageTemplates = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialTemplatesLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchCommunicationMsgTemplates, {
                params: {
                    page: pageNumber,
                    type: selectedTab === 'Active' ? 'active' : 'requested'
                }
            });
            if (response.data.status === 200) {
                setTemplates(response.data.templates);
                console.log('Message Templates:', response.data);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialTemplatesLoading(false);
        }

    }

    useEffect(() => {
        if (selectedTab) {
            fetchMessageTemplates(true, 1);
        }
    }, [selectedTab]);

    const handleEditTemplate = (template) => {
        setSelectedTemplate(template);
        setIsMessageCreateModalOpen(true);
    }

    return (
        <>
            <MessagingWrapper>
                <div className="page_head">
                    <h2>Manage Templates</h2>
                </div>
                <div className="filter_search_sec">
                    <div className="search_head">
                        <h5>Configure automated reminders and notification templates.</h5>
                    </div>
                    <div className="search_item">
                        <div className="search_sec">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search by Messege..." />
                        </div>
                        <div className="filter_sec">
                            <div className="filter_btn">
                                <i className="fa-solid fa-filter"></i>
                                <p>Filter by</p>
                            </div>
                            <div className="filter_dropdown"></div>
                        </div>
                        <div className="add_btn">
                            <button onClick={openMessageCreateModal}>
                                <i className="fa-solid fa-plus"></i>
                                <p>Add New</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        {
                            tabs.map((tab, i) =>
                                <li
                                    key={i}
                                    className={selectedTab === tab ? 'active' : ''}
                                    onClick={() => setSelectedTab(tab)}
                                >
                                    {tab}
                                </li>
                            )
                        }
                    </div>
                </div>
                <div className="page_content">
                    {
                        isInitialTemplatesLoading ? (
                            Array.from({ length: 2 }).map((_, index) => (
                                <div className="content_box" key={index}>
                                    <div className="box_head">
                                        <SkeletonLoader width="100%" height="13px" />
                                    </div>
                                    <div className="box_body">
                                        <SkeletonLoader width="100%" height="13px" />

                                        <SkeletonLoader width="100%" height="13px" />
                                        <SkeletonLoader width="100%" height="13px" />
                                    </div>
                                </div>
                            ))
                        ) : templates.length > 0 ? (
                            templates.map((template, index) => (
                                <div className="content_box" key={index}>
                                    <div className="box_head">
                                        <h5>{template.template_title}</h5>
                                        <span className={`status ${template.status.toLowerCase()}`}
                                        >{template.status}</span>
                                        {selectedTab === 'Requested' && <a onClick={() => handleEditTemplate(template)}><i className="fa-regular fa-pen-to-square"></i>Edit</a>}
                                    </div>
                                    <div className="box_body">
                                        <p>{template.template_body}</p>
                                    </div>
                                    <div className="box_bottom">
                                        {
                                            template.approved_by ? (
                                                (template.approved_by.id === template.created_by.id) ? (
                                                    <p><i className="fa-solid fa-user"></i><b>Created & approved by :</b>{template.created_by.name}</p>
                                                ) : (
                                                    <>
                                                        <p><i className="fa-solid fa-user"></i><b>Created by :</b>{template.created_by.name}</p>
                                                        <span><i className="fa-solid fa-circle"></i></span>
                                                        <p><i className="fa-solid fa-user"></i><b>Approved by :</b>{template.approved_by.name}</p>
                                                    </>
                                                )
                                            ) : (
                                                <p><b>Created by :</b>{template.created_by.inst_name}</p>
                                            )
                                        }
                                        <span><i className="fa-solid fa-circle"></i></span>
                                        <p><i className="fa-solid fa-calendar"></i><b>{template.approved_by ? 'Updated' : 'Created'} at :</b>{template.updated_at}</p>
                                        {
                                            template.balance && (
                                                <>
                                                    <span><i className="fa-solid fa-circle"></i></span>
                                                    <p><i className="fa-solid fa-wallet"></i><b>Balance consumed :</b>{template.balance} SMS</p>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="empty_box">
                                <img src="/images/no-fields.svg" alt="" />
                                <p>No templates found.</p>
                            </div>
                        )
                    }
                </div>

                <CreateMessageModal
                    isMessageCreateModalOpen={isMessageCreateModalOpen}
                    setIsMessageCreateModalOpen={setIsMessageCreateModalOpen}
                    selectedTemplate={selectedTemplate}
                    setSelectedTemplate={setSelectedTemplate}
                    refreshData={() => fetchMessageTemplates(false, 1)}
                />
            </MessagingWrapper>
        </>
    );
}

export default MessagingPage;