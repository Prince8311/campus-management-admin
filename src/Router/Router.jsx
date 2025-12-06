import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PageLayout from "../layouts/PageLayout";
import DashboardPage from "../Pages/Dashboard";

// Academics
import StudentInformationPage from "../Pages/Academics/StudentInformation";

const Routers = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route path="" element={<Navigate to="dashboard" />} />
                        <Route path="dashboard" element={<DashboardPage />} />
                        <Route path="academics/student-information" element={<StudentInformationPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Routers;