import { useEffect, useState } from "react";
import CreateSessionsModal from "../Components/Modals/Sessions/CreateSession";
import { SessionWrapper } from "../Styles/SessionStyle";
import axiosInstance from "../Services/Middleware/AxiosInstance";
import { toast } from "react-toastify";
import { getApiEndpoints } from "../Services/Api/ApiConfig";
import SkeletonLoader from "../Components/Loader/SkeletonLoader";

const SessionPage = () => {
    const api = getApiEndpoints();
    const tabs = [
        { label: 'All Sessions', value: '' },
        { label: 'Ongoing', value: 'Ongoing' },
        { label: 'Upcoming', value: 'Upcoming' },
        { label: 'Concluded', value: 'Concluded' }
    ];
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const [isInitialSessionsLoading, setIsInitialSessionsLoading] = useState(false);
    const [sessions, setSessions] = useState([]);
    const [isCreateSessionOpen, setIsCreateSessionOpen] = useState(false);

    const fetchSessions = async (showSkeleton = false) => {
        if (showSkeleton) {
            setIsInitialSessionsLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchSessions, {
                params: {
                    status: selectedTab.value
                }
            });
            if (response?.data.status === 200) {
                setSessions(response?.data.sessions);
            }
        } catch (error) {
            setSessions([]);
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialSessionsLoading(false);
        }
    }

    useEffect(() => {
        fetchSessions(true);
    }, [selectedTab.value]);

    const handleOpenCreateSession = () => {
        setIsCreateSessionOpen(true);
    };

    return (
        <>
            <SessionWrapper>
                <div className="page_head">
                    <h2>Academic Sessions</h2>
                    <div className="add_btn">
                        <button onClick={handleOpenCreateSession}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Create New Session</p>
                        </button>
                    </div>
                </div>
                <div className="heading_option_part">
                    <div className="inner_part">
                        {
                            tabs.map((tab, i) =>
                                <a
                                    key={i}
                                    className={`part_box ${selectedTab.label === tab.label ? 'active' : ''}`}
                                    onClick={() => setSelectedTab(tab)}
                                >
                                    <h6>{tab.label}</h6>
                                </a>
                            )
                        }
                    </div>
                </div>
                <div className="session_levels">
                    <div className="box_items">
                        {
                            isInitialSessionsLoading ? (
                                Array.from({ length: 3 }).map((_, i) => (
                                    <div key={i} className="session_item">
                                        <SkeletonLoader width="100%" height="100px" />
                                    </div>
                                ))
                            ) : sessions.length > 0 ? (
                                <div className="session_item">
                                    <div className="item_inner">
                                        <div className="inner_top">
                                            <div className="inner_content">
                                                <a><i className="fa-solid fa-graduation-cap"></i></a>
                                                <h6>AY 2025-26</h6>
                                                <span className="ongoing">Ongoing</span>
                                            </div>
                                            <div className="session_name">
                                                <p>01 Apr 2025 - 31 Mar 2026</p>
                                            </div>
                                        </div>
                                        <div className="inner_btn">
                                            <button className="edit"><i className="fa-solid fa-pen-to-square"></i>Edit</button>
                                            <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="empty_box">
                                    <img src="/images/no-fields.svg" alt="" />
                                    <p>No Session available.</p>
                                </div>
                            )
                        }
                    </div>
                </div>
                <CreateSessionsModal
                    isCreateSessionOpen={isCreateSessionOpen}
                    setIsCreateSessionOpen={setIsCreateSessionOpen}
                    refreshSessions={() => fetchSessions(false)}
                />
            </SessionWrapper>
        </>
    );
}

export default SessionPage;