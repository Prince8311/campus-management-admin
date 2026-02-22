export const baseURL = 'https://api.edu-connect.ticketbay.in';
export const apiURL = `${baseURL}/admin`;

export const getApiEndpoints = () => {
    return {
        // Auth 
        login: `${apiURL}/auth/login.php`,
        sendOtp: `${apiURL}/auth/send-mail-otp.php`,
        checkAuth: `${apiURL}/auth/check-auth.php`,
        refreshToken: `${apiURL}/auth/refresh-token.php`,
    };
}