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

        // State & Cities 
        createCity: `${apiURL}/api/state-cities/create.php`,
        fetchStatesCities: `${apiURL}/api/state-cities/list.php`,
        updateCityName: `${apiURL}/api/state-cities/city-update.php`,
        deleteStatesCities: `${apiURL}/api/state-cities/delete-state-city.php`,
        fetchCitiesStatewise: `${apiURL}/api/state-cities/city-list.php`,

        // Institutions 
        addInstitution: `${apiURL}/api/institutions/create.php`,

        // Sessions 
        createSession: `${apiURL}/api/institutions/sessions/create.php`,
        fetchSessions: `${apiURL}/api/institutions/sessions/list.php`,

        // Academic 
        createAcademicLevel: `${apiURL}/api/institutions/academic/academic-level/create.php`,
        fetchAcademicLevels: `${apiURL}/api/institutions/academic/academic-level/list.php`,

        // ====================== Students ======================
        studentUploadForm: `${apiURL}/api/student/form.php`,
        addStudent: `${apiURL}/api/student/create.php`,
        fetchStudents: `${apiURL}/api/student/list.php`,

        // Form Sections 
        createStudentFormSection: `${apiURL}/api/student/sections/create.php`,
        fetchStudentFormSection: `${apiURL}/api/student/sections/list.php`,

        // Form Fields
        createStudentFormFields: `${apiURL}/api/student/fields/create.php`,
        deleteStudentFormField: `${apiURL}/api/student/fields/delete.php`,
        fetchStudentFormFields: `${apiURL}/api/student/fields/list.php`,
        updateStudentFormFieldOrder: `${apiURL}/api/student/fields/update-order.php`,
        
        // ====================== Staffs ======================
        // Form Sections 
        createStaffFormSection: `${apiURL}/api/staff/sections/create.php`,
        deleteStaffFormSection: `${apiURL}/api/staff/sections/delete.php`,
        fetchStaffFormSection: `${apiURL}/api/staff/sections/list.php`,
        
        // Form Fields
        createStaffFormFields: `${apiURL}/api/staff/fields/create.php`,
        deleteStaffFormField: `${apiURL}/api/staff/fields/delete.php`,
        fetchStaffFormFields: `${apiURL}/api/staff/fields/list.php`,
        updateStaffFormFieldOrder: `${apiURL}/api/staff/fields/update-order.php`,


        // Subjects 
        createSubject: `${apiURL}/api/institutions/subjects/create.php`,
        fetchSubjects: `${apiURL}/api/institutions/subjects/list.php`,
        addSubjectClassWise: `${apiURL}/api/institutions/academic/class/add-subject.php`,

        // Class & Section 
        createClass: `${apiURL}/api/institutions/academic/class/create.php`,
        fetchClasses: `${apiURL}/api/institutions/academic/class/list.php`,
        createSection: `${apiURL}/api/institutions/academic/section/create.php`,
        deleteSection: `${apiURL}/api/institutions/academic/section/delete.php`,
    };
}