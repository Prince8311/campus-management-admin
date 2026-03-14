export const baseURL = 'https://api.edu-connect.ticketbay.in';
export const apiURL = `${baseURL}/admin`;

export const getApiEndpoints = () => {
    return {
        // Auth 
        login: `${apiURL}/auth/login.php`,
        sendOtp: `${apiURL}/auth/send-mail-otp.php`,
        checkAuth: `${apiURL}/auth/check-auth.php`,
        refreshToken: `${apiURL}/auth/refresh-token.php`,
        logout: `${apiURL}/auth/logout.php`,

        // Institutions 
        addInstitution: `${apiURL}/api/institutions/create.php`,

        // Sessions 
        createSession: `${apiURL}/api/institutions/sessions/create.php`,
        fetchSessions: `${apiURL}/api/institutions/sessions/list.php`,

        // Academic 
        createAcademicLevel: `${apiURL}/api/institutions/academic/academic-level/create.php`,
        fetchAcademicLevels: `${apiURL}/api/institutions/academic/academic-level/list.php`,

        // Students 
        studentUploadForm: `${apiURL}/api/student/form.php`,

        // Sections 
        createStudentFormSection: `${apiURL}/api/student/sections/create.php`,
        fetchStudentFormSection: `${apiURL}/api/student/sections/list.php`,

        // Fields
        createStudentFormFields: `${apiURL}/api/student/fields/create.php`,
        fetchStudentFormFields: `${apiURL}/api/student/fields/list.php`,
        updateStudentFormFieldOrder: `${apiURL}/api/student/fields/update-order.php`,
    };
}