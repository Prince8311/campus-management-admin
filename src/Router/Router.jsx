import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ScrollToTop from "../Components/ScrollToTop";

// Frontend Layout
import FrontendLayout from "../Layouts/FrontendLayout";
import HomePage from "../Frontend/Screens/Home";
import TermsConditionsPage from "../Frontend/Screens/TermsCondition";
import PrivacyPolicyPage from "../Frontend/Screens/PrivacyPolicy";

// Authentication 
import AuthenticationPage from "../Auth/Authentication";
import PageLayout from "../Layouts/PageLayout";
import DashboardPage from "../Pages/Dashboard";
import SessionPage from "../Pages/Session";

// Institutions 
import InstitutionMainPage from "../Pages/Institutions/Index";
import InstitutionListPage from "../Pages/Institutions/Screens/InstitutionList";

// Academics
import AcademicMainPage from "../Pages/Academics/Index";
import StudentInformationPage from "../Pages/Academics/Screens/StudentInformation";
import ClassroomPage from "../Pages/Academics/Screens/Classrooms";
import StudentAttendencePage from "../Pages/Academics/Screens/StudentAttendence";
import AddStudentPage from "../Pages/Academics/Screens/AddStudent";
import ClassroomDetailsPage from "../Pages/Academics/Screens/ClassroomDetails";

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
import AddFeesStructure from "../Pages/FinanceManagement/Screens/AddFeesStructure";

// Communication 
import CommunicationMainPage from "../Pages/Communication/Index";
import MessagingPage from "../Pages/Communication/Screens/Messaging";

// Staff Management 
import StaffManagementMainPage from "../Pages/StaffManagement/Index";
import StaffInformationPage from "../Pages/StaffManagement/Screens/StaffInformation";
import AddStaffPage from "../Pages/StaffManagement/Screens/AddStaff";

// Settings 
import SettingsMainPage from "../Pages/Settings/Index";
import RolesPermissionsPage from "../Pages/Settings/Screens/RolePermission";
import AddRolePermissionPage from "../Pages/Settings/Screens/AddRolePermissions";
import ProfileSettingPage from "../Pages/Settings/Screens/ProfileSettings";
import TimeTableSettingsPage from "../Pages/Settings/Screens/TimeTableSettings";
import StudentPage from "../Pages/Settings/Screens/Student";
import StaffPage from "../Pages/Settings/Screens/Staff";
import SectionFieldsPage from "../Pages/Settings/Screens/SectionFields";
import SubjectSettingsPage from "../Pages/Settings/Screens/SubjectSettings";
import StateCityPage from "../Pages/Settings/Screens/StateCities";

import AlumniPage from "../Pages/Alumni";
import BillingPage from "../Pages/Billing";

//Report
import ReportMainPage from "../Pages/Reports/Index";
import SchoolSthrengthPage from "../Pages/Reports/Screens/SchoolStrength";
import AcademicsPage from "../Pages/Reports/Screens/Academics";
import StudentWiseAcademicPage from "../Pages/Reports/Screens/StedentWiseAcademic";
import TeacherWiseAcademicPage from "../Pages/Reports/Screens/TeacherWiseAcademic";
import ClassWiseAcademicPage from "../Pages/Reports/Screens/ClassWiseAcademic";

import StudentReportPage from "../Pages/Reports/Screens/StudentReport";
import OverViewPage from "../Pages/Reports/Screens/OverView";
import ClassWisePage from "../Pages/Reports/Screens/ClassWise";
import StudentWisePage from "../Pages/Reports/Screens/StudentWise";

import StaffReportPage from "../Pages/Reports/Screens/StaffReport";
import StaffOverViewPage from "../Pages/Reports/Screens/StaffOverView";
import TeachingStaffPage from "../Pages/Reports/Screens/TeachingStaff";
import NonTeachingStaffPage from "../Pages/Reports/Screens/NonTeachingStaff";

// Transport
import TransportMainPage from "../Pages/Transport/Index";
import PassengersPage from "../Pages/Transport/Screens/Passengers";
import StopagesPage from "../Pages/Transport/Screens/Stopages";
import VehiclesPage from "../Pages/Transport/Screens/Vehicles";
import VehicleStaffsPage from "../Pages/Transport/Screens/VehicleStaffs";
import VehicleRoutesPage from "../Pages/Transport/Screens/VehicleRoutes";
import AddRoutesPage from "../Pages/Transport/Screens/AddRoutes";

const Routers = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<FrontendLayout />} >
                        <Route index element={<HomePage />} />
                        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
                        <Route path="terms-conditions" element={<TermsConditionsPage />} />
                    </Route>
                    <Route path="auth" element={<AuthenticationPage />} />
                    <Route path="admin" element={<PageLayout />}>
                        <Route path="" element={<Navigate to="dashboard" />} />
                        <Route path="dashboard" element={<DashboardPage />} />
                        <Route path="sessions" element={<SessionPage />} />
                        <Route path="institutions" element={<InstitutionMainPage />}>
                            <Route path="" element={<Navigate to="institution-list" />} />
                            <Route path="institution-list" element={<InstitutionListPage />} />
                        </Route>
                        <Route path="reports" element={<ReportMainPage />}>
                            <Route path="" element={<Navigate to="school-strength" />} />
                            <Route path="school-strength" element={<SchoolSthrengthPage />}>
                                <Route path="" element={<Navigate to="student-report" />} />
                                <Route path="student-report" element={<StudentReportPage />}>
                                    <Route path="" element={<Navigate to="overview" />} />
                                    <Route path="overview" element={<OverViewPage />} />
                                    <Route path="class-wise" element={<ClassWisePage />} />
                                    <Route path="student-wise" element={<StudentWisePage />} />
                                </Route>
                                <Route path="staff-report" element={<StaffReportPage />}>
                                    <Route path="" element={<Navigate to="staffoverview" />} />
                                    <Route path="staffoverview" element={<StaffOverViewPage />} />
                                    <Route path="teaching-staff" element={<TeachingStaffPage />} />
                                    <Route path="non-teaching-staff" element={<NonTeachingStaffPage />} />
                                </Route>
                            </Route>
                            <Route path="academics" element={<AcademicsPage />}>
                                <Route path="" element={<Navigate to="student-wise-academic" />} />
                                <Route path="student-wise-academic" element={<StudentWiseAcademicPage />} />
                                <Route path="teacher-wise-academic" element={<TeacherWiseAcademicPage />} />
                                <Route path="class-wise-academic" element={<ClassWiseAcademicPage />} />
                            </Route>
                        </Route>
                        <Route path="academics" element={<AcademicMainPage />}>
                            <Route path="" element={<Navigate to="student-information" />} />
                            <Route path="student-information" element={<StudentInformationPage />} />
                            <Route path="classrooms" element={<ClassroomPage />} />
                            <Route path="student-attendence" element={<StudentAttendencePage />} />
                            <Route path="add-student" element={<AddStudentPage />} />
                            <Route path="classroom-details" element={<ClassroomDetailsPage />} />
                        </Route>
                        <Route path="finance-management" element={<FinanceManagementMainPage />}>
                            <Route path="" element={<Navigate to="fee-collection" />} />
                            <Route path="fee-collection" element={<FeeCollectionPage />} />
                            <Route path="fee-transactions" element={<FeeTransactionsPage />} />
                            <Route path="add-fees-structure" element={<AddFeesStructure />} />
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
                            <Route path="add-staff" element={<AddStaffPage />} />
                        </Route>
                        <Route path="transport-management" element={<TransportMainPage />}>
                            <Route path="" element={<Navigate to="passengers" />} />
                            <Route path="passengers" element={<PassengersPage />} />
                            <Route path="stopages" element={<StopagesPage />} />
                            <Route path="vehicles" element={<VehiclesPage />} />
                            <Route path="staffs" element={<VehicleStaffsPage />} />
                            <Route path="routes" element={<VehicleRoutesPage />} />
                        </Route>
                        <Route path="add-routes" element={<AddRoutesPage />} />
                        <Route path="settings" element={<SettingsMainPage />}>
                            <Route path="" element={<Navigate to="roles-permissions" />} />
                            <Route path="roles-permissions" element={<RolesPermissionsPage />} />
                            <Route path="add-roles-permissions" element={<AddRolePermissionPage />} />
                            <Route path="time-tables" element={<TimeTableSettingsPage />} />
                            <Route path="state-cities" element={<StateCityPage />} />
                            <Route path="subject-settings" element={<SubjectSettingsPage />} />
                            <Route path="profile-settings" element={<ProfileSettingPage />}>
                                <Route path="" element={<Navigate to="student" />} />
                                <Route path="student" element={<StudentPage />} />
                                <Route path="staff" element={<StaffPage />} />
                                <Route path="section-fields" element={<SectionFieldsPage />} />
                            </Route>
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