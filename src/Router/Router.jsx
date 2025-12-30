import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PageLayout from "../layouts/PageLayout";
import DashboardPage from "../Pages/Dashboard";

// Academics
import AcademicMainPage from "../Pages/Academics/Index";
import StudentInformationPage from "../Pages/Academics/Screens/StudentInformation";
import ClassroomPage from "../Pages/Academics/Screens/Classrooms";
import StudentAttendencePage from "../Pages/Academics/Screens/StudentAttendence";

// Finance Management 
import FinanceManagementMainPage from "../Pages/FinanceManagement/Index";
import FeeCollectionPage from "../Pages/FinanceManagement/Screens/FeeCollection";
import FeeTransactionsPage from "../Pages/FinanceManagement/Screens/FeeTransactions";
import FeeConfigurationPage from "../Pages/FinanceManagement/Screens/FeeConfiguration";
import FeesStructurePage from "../Pages/FinanceManagement/Screens/FeesStructure";
import DiscountPage from "../Pages/FinanceManagement/Screens/Discount";
import BankAccountPage from "../Pages/FinanceManagement/Screens/BankAccounts";
import AllAccountsPage from "../Pages/FinanceManagement/Screens/AllAccounts";
import SplitAccountsPage from "../Pages/FinanceManagement/Screens/SplitAccounts";

// Communication 
import CommunicationMainPage from "../Pages/Communication/Index";
import MessagingPage from "../Pages/Communication/Screens/Messaging";

// Staff Management 
import StaffManagementMainPage from "../Pages/StaffManagement/Index";
import StaffInformationPage from "../Pages/StaffManagement/Screens/StaffInformation";

import AlumniPage from "../Pages/Alumni";
import BillingPage from "../Pages/Billing";

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
                            <Route path="student-attendence" element={<StudentAttendencePage />} />
                        </Route>
                        <Route path="finance-management" element={<FinanceManagementMainPage />}>
                            <Route path="" element={<Navigate to="fee-collection" />} />
                            <Route path="fee-collection" element={<FeeCollectionPage />} />
                            <Route path="fee-transactions" element={<FeeTransactionsPage />} />
                            <Route path="fee-configuration" element={<FeeConfigurationPage />}>
                                <Route path="" element={<Navigate to="fees-structure" />} />
                                <Route path="fees-structure" element={<FeesStructurePage />} />
                                <Route path="discount" element={<DiscountPage />} />
                            </Route>
                            <Route path="bank-accounts" element={<BankAccountPage />}>
                                <Route path="" element={<Navigate to="all-accounts" />} />
                                <Route path="all-accounts" element={<AllAccountsPage />} />
                                <Route path="split-accounts" element={<SplitAccountsPage />} />
                            </Route>
                        </Route>
                        <Route path="communication" element={<CommunicationMainPage />}>
                            <Route path="" element={<Navigate to="messaging" />} />
                            <Route path="messaging" element={<MessagingPage />} />
                        </Route>
                        <Route path="staff-management" element={<StaffManagementMainPage />}>
                            <Route path="" element={<Navigate to="staff-information" />} />
                            <Route path="staff-information" element={<StaffInformationPage />} />
                        </Route>
                        <Route path="alumni" element={<AlumniPage />} />
                        <Route path="billing" element={<BillingPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Routers;