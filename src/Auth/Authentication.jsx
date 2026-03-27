/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { AuthWrapper } from "../Styles/AuthStyle";
import { useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import { toast } from "react-toastify";
import { getApiEndpoints } from "../Services/Api/ApiConfig";
import axiosInstance from "../Services/Middleware/AxiosInstance";
import ButtonLoader from "../Components/Loader/ButtonLoader";

const AuthenticationPage = () => {
    const api = getApiEndpoints();
    const navigate = useNavigate();
    const [loginByOtp, setLoginByOtp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [otp, setOtp] = useState('');
    const [otpMail, setOtpMail] = useState('');
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const token = localStorage.getItem("authToken");

    useEffect(() => {
        if (token) {
            navigate("/admin", { replace: true });
        }
    }, [navigate, token]);

    const maskEmail = (email) => {
        const [user, domain] = email.split("@");
        const maskedUser = `${user.slice(0, 3)}****`;
        return `${maskedUser}@${domain}`;
    };

    const isButtonDisabled = (() => {
        if (!loginByOtp) {
            return !userName.trim() || !password.trim();
        }

        if (loginByOtp && !isOtpSent) {
            return !userName.trim();
        }

        if (loginByOtp && isOtpSent) {
            return otp.length !== 6;
        }

        return true;
    })();

    const handleSendOTP = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = {
            name: userName
        };
        try {
            const response = await axiosInstance.post(api.sendOtp, payload);
            if (response.data.status === 200) {
                toast.success(response?.data.message);
                setIsOtpSent(true);
                setOtpMail(response?.data.userEmail);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = {
            name: userName,
            loginByOtp: loginByOtp,
            ...(loginByOtp ? { otp } : { password }),
        };
        try {
            const response = await axiosInstance.post(api.login, payload);
            if (response.data.status === 200) {
                setIsOtpSent(false);
                toast.success(response?.data.message);
                localStorage.setItem("authToken", response?.data.authToken);
                navigate("/admin", { replace: true });
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
            setLoginByOtp(false);
        }
    }

    return (
        <>
            <AuthWrapper>
                <div className="page_inner">
                    <div className="top_part">
                        <h4>!! Welcome !!</h4>
                        <img src="/images/logo-1.jpg" alt="" />
                        <h5>Edu Connekt</h5>
                        <p>School & college management</p>
                    </div>
                    <div className="bottom_part">
                        <div className="form_sec">
                            <div className="input_box">
                                <input
                                    type="text"
                                    name="name"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    required
                                />
                                <span>{loginByOtp ? 'Email Address' : 'Email / Contact No.'}</span>
                            </div>
                            {
                                !loginByOtp &&
                                <div className="input_box">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="name"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <span>Password</span>
                                    <a onClick={() => setShowPassword(!showPassword)}><i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i></a>
                                </div>
                            }
                            {
                                (loginByOtp && isOtpSent) &&
                                <div className="otp_sec">
                                    <p>We have send a 6 digit OTP to <span>{maskEmail(otpMail)}</span></p>
                                    <div className="otp_input_sec">
                                        <OTPInput
                                            value={otp}
                                            onChange={setOtp}
                                            numInputs={6}
                                            renderInput={(props) => <input {...props} inputMode="numeric" pattern="[0-9]*" required />}
                                        />
                                    </div>
                                </div>
                            }
                            <div className="form_btn">
                                <button
                                    className={`${isButtonDisabled ? 'disabled' : ''} ${isButtonLoading ? 'loading' : ''}`}
                                    disabled={isButtonDisabled || isButtonLoading}
                                    onClick={(loginByOtp && !isOtpSent) ? handleSendOTP : handleLogin}
                                >
                                    {
                                        isButtonLoading ? (
                                            <ButtonLoader />
                                        ) : (
                                            <>
                                                {loginByOtp
                                                    ? (isOtpSent ? 'Verify & Login' : 'Send OTP')
                                                    : 'Login'
                                                }
                                            </>
                                        )
                                    }
                                </button>
                            </div>
                            <div className="login_option">
                                <a onClick={() => setLoginByOtp(!loginByOtp)}>or login {loginByOtp ? 'by password' : 'with OTP'}</a>
                            </div>
                        </div>
                        <div className="accept_part">
                            <p>By continuing, you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a></p>
                        </div>
                    </div>
                </div>
            </AuthWrapper>
        </>
    );
}

export default AuthenticationPage;