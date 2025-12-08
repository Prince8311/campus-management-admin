import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PageLayout from "../layouts/PageLayout";
import DashboardPage from "../Pages/Dashboard";

// Academics
import AcademicMainPage from "../Pages/Academics/Index";
import StudentInformationPage from "../Pages/Academics/Screens/StudentInformation";
import ClassroomPage from "../Pages/Academics/Screens/Classrooms";

// Finance Management 
import FinanceManagementMainPage from "../Pages/FinanceManagement/Index";
import FeeCollectionPage from "../Pages/FinanceManagement/Screens/FeeCollection";
import FeeTransactionsPage from "../Pages/FinanceManagement/Screens/FeeTransactions";

// Communication 
import CommunicationMainPage from "../Pages/Communication/Index";
import MessagingPage from "../Pages/Communication/Screens/Messaging";

import AlumniPage from "../Pages/Alumni";

const Routers = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route path="" element={<Navigate to="dashboard" />} />
                        <Route path="dashboard" element={<DashboardPage />} />
                        <Route path="academics" element={<AcademicMainPage />}>
                            <Route path="" element={<Navigate to="student-information" />} />
                            <Route path="student-information" element={<StudentInformationPage />} />
                            <Route path="classrooms" element={<ClassroomPage />} />
                        </Route>
                        <Route path="finance-management" element={<FinanceManagementMainPage />}>
                            <Route path="" element={<Navigate to="fee-collection" />} />
                            <Route path="fee-collection" element={<FeeCollectionPage />} />
                            <Route path="fee-transactions" element={<FeeTransactionsPage />} />
                        </Route>
                        <Route path="communication" element={<CommunicationMainPage />}>
                            <Route path="" element={<Navigate to="messaging" />} />
                            <Route path="messaging" element={<MessagingPage />} />
                        </Route>
                        <Route path="alumni" element={<AlumniPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Routers;