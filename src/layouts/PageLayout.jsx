import { Outlet } from "react-router-dom";
import { PageWrapper } from "../Styles/LayoutStyle";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { UserProvider } from "../Context/PageContext";

const PageLayout = () => {
    return (
        <>
            <UserProvider>
                <PageWrapper>
                    <div className="left_side">
                        <Sidebar />
                    </div>
                    <div className="right_side">
                        <div className="top_bar">
                            <Navbar />
                        </div>
                        <div className="main_content">
                            <div className="content_inner">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </PageWrapper>
            </UserProvider>
        </>
    );
}

export default PageLayout;