import { createContext, useContext, useEffect, useState } from "react";
import { getApiEndpoints } from "../Services/Api/ApiConfig";
import axiosInstance from "../Services/Middleware/AxiosInstance";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const api = getApiEndpoints();
    const [authToken, setAuthToken] = useState('');
    const [userDetails, setUserDetails] = useState({});
    const [pageName, setPageName] = useState('Dashboard');
    const [authStatus, setAuthStatus] = useState("loading");

    const checkAuth = async () => {
        try {
            const response = await axiosInstance.get(api.checkAuth);

            if (response?.data?.status === 200) {
                setUserDetails(response.data.user);
                setAuthStatus("authenticated");
                console.log(response);
            } else {
                throw new Error("Invalid auth");
            }
        } catch {
            setAuthStatus("unauthenticated");
        }
    };

    useEffect(() => {
        const savedToken = localStorage.getItem("authToken");
        if (!savedToken) {
            setAuthStatus("unauthenticated");
            return;
        }
        setAuthToken(savedToken);
        checkAuth();
    }, []);

    return (
        <UserContext.Provider value={{ authToken, setAuthToken, pageName, setPageName, authStatus, userDetails, setUserDetails }}>
            {children}
        </UserContext.Provider>
    );
}

export const UserData = () => useContext(UserContext);