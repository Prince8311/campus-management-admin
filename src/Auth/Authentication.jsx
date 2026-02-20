import { useState } from "react";
import { AuthWrapper } from "../Styles/AuthStyle";
import OTPInput from "react-otp-input";
import { toast } from "react-toastify";
import { getApiEndpoints } from "../Services/Api/ApiConfig";
import axiosInstance from "../Services/Middleware/AxiosInstance";
import ButtonLoader from "../Components/Loader/ButtonLoader";

const AuthenticationPage = () => {
    const api = getApiEndpoints();
    const [loginByOtp, setLoginByOtp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [otp, setOtp] = useState('');

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
                                <span>Email / Contact No.</span>
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
                                    <p>We have send a 6 digit OTP to <span>{maskEmail('sourishmondal.vizac@gmail.com')}</span></p>
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
                                <button disabled={isButtonDisabled}>
                                    {loginByOtp
                                        ? (isOtpSent ? 'Verify & Login' : 'Send OTP')
                                        : 'Login'}
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