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

        // Student Form 
        createStudentFormSection: `${apiURL}/api/student/create-form-section.php`,
        fetchStudentFormSection: `${apiURL}/api/student/form-section-list.php`,
        createStudentFormFields: `${apiURL}/api/student/create-form-fields.php`,
        fetchStudentFormFields: `${apiURL}/api/student/form-field-list.php`,
    };
}