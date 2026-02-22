import axios from "axios";
import { getApiEndpoints } from "../Api/ApiConfig";

const api = getApiEndpoints();

/* ============== AXIOS INSTANCES ============== */
const axiosInstance = axios.create({
    withCredentials: true,
});

const refreshClient = axios.create({
    withCredentials: true,
});

/* ============== REFRESH QUEUE HANDLING ============== */
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach(promise => {
        error ? promise.reject(error) : promise.resolve(token);
    });
    failedQueue = [];
};

/* ============== REQUEST INTERCEPTORS ============== */

// Attach Bearer token to normal requests
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Attach Bearer token to refresh request
refreshClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

/* ============== RESPONSE INTERCEPTOR ============== */
axiosInstance.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;

        // Guard: no response or not auth error
        if (!error.response || error.response.status !== 401) {
            return Promise.reject(error);
        }

        // Guard: prevent infinite refresh loop
        if (originalRequest._retry || originalRequest.url.includes(api.refreshToken) || originalRequest.url.includes(api.logout)) {
            return Promise.reject(error);
        }

        // If refresh already in progress, queue the request
        if (isRefreshing) {
            return new Promise((resolve, reject) => {
                failedQueue.push({ resolve, reject });
            }).then(token => {
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return axiosInstance(originalRequest);
            });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
            const { data } = await refreshClient.get(api.refreshToken);

            if (!data?.newToken) {
                throw new Error("Refresh failed");
            }

            // Save new token
            localStorage.setItem("authToken", data.newToken);

            // Resolve queued requests
            processQueue(null, data.newToken);

            // Retry original request
            originalRequest.headers.Authorization = `Bearer ${data.newToken}`;
            return axiosInstance(originalRequest);
        } catch (err) {
            processQueue(err, null);
            localStorage.removeItem("authToken");
            window.location.href = "/";
            return Promise.reject(err);
        } finally {
            isRefreshing = false;
        }
    }
);

export default axiosInstance;