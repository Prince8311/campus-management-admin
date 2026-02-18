import { AuthWrapper } from "../Styles/AuthStyle";

const AuthenticationPage = () => {
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
                                <input type="text" name="name" required />
                                <span>Email / Contact No.</span>
                            </div>
                            <div className="input_box">
                                <input type="text" name="name" required />
                                <span>Password</span>
                                <a><i className="fa-solid fa-eye-slash"></i></a>
                            </div>
                            <div className="form_btn">
                                <button>Login</button>
                            </div>
                            <div className="login_option">
                                <a>or login with OTP</a>
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