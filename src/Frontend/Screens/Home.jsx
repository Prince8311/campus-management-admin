/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HomePageWrapper } from "../../Styles/Frontend/HomeStyle";
import SelectAddressModal from "../../Components/Modals/Setting/SelectAddress";
import SuccessModal from "../../Components/Modals/Success";
import { getApiEndpoints } from "../../Services/Api/ApiConfig";
import axiosInstance from "../../Services/Middleware/AxiosInstance";
import { toast } from "react-toastify";
import ButtonLoader from "../../Components/Loader/ButtonLoader";
import TimeBox from "../../Components/TimeBox";

const HomePage = () => {
    const api = getApiEndpoints();
    const location = useLocation();
    const navigate = useNavigate();
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState('');
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [institutionName, setInstitutionName] = useState('');
    const [isEmail, setIsEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectState, setSelectState] = useState('');
    const [selectCity, setSelectCity] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [registrationView, setRegistrationView] = useState('intro');
    const startTimeRef = useRef(null);
    const endTimeRef = useRef(null);
    const [institutionTiming, setInstitutionTiming] = useState({ start: '', end: '' });
    const [openTimeBox, setOpenTimeBox] = useState(null);
    const boards = ["State", "CBSC", "Central"];
    const [selectedBoard, setSelectedBoard] = useState('');
    const [isBoardDropdownOpen, setIsBoardDropdownOpen] = useState(false);
    const [isAffiliationNumber, setIsAffiliationNumber] = useState('');
    const isFormValid = institutionName.trim() !== '' && isEmail.trim() !== '' && phoneNumber.trim() !== '' && selectedAddress.trim() !== '' && selectedBoard.trim() !== '' && isAffiliationNumber.trim() !== '';



    const handleGetStarted = () => {
        navigate("/auth", { replace: true });
    };

    function toggleDropdown() {
        setIsBoardDropdownOpen(!isBoardDropdownOpen);
    }

    const handleSelectBoard = (board) => {
        setSelectedBoard(board);
        setIsBoardDropdownOpen(false);
    }

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const section = params.get("section");
        if (section) {
            setTimeout(() => {
                const el = document.getElementById(section);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                }
                navigate("/", { replace: true });
            }, 100);
        }
    }, [location]);

    const handleRedirectPricingPage = () => {
        navigate("/pricing");
    };

    const handleRedirectSubcriptionPage = () => {
        navigate("/subcription");
    };

    const handleAddressModalOpen = () => {
        setShowAddressModal(true);
    }

    const handleRegisterInstitution = async (e) => {
        e.preventDefault();
        // setIsButtonLoading(true);
        const payload = {
            institutionName: institutionName,
            phone: phoneNumber,
            email: isEmail,
            location: selectedAddress,
            city: selectCity,
            state: selectState,
            latitude: lat,
            longitude: lng,
            board: selectedBoard,
            affiliationNo: isAffiliationNumber,
            startTime: institutionTiming.start,
            endTime: institutionTiming.end
        };
        try {
            const response = await axiosInstance.post(api.register, payload);
            if (response?.data.status === 200) {
                setIsSuccessModalOpen(true);
                setIsEmail('');
                setPhoneNumber('');
                setInstitutionTiming({ start: '', end: '' });
                setSelectedAddress('');
                setSelectedBoard('');
                setIsAffiliationNumber('');
                setInstitutionName('');
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
        }
    }

    return (
        <>
            <HomePageWrapper>
                <div className="banner_sec" id="home">
                    <div className="sec_content">
                        <div className="left_content">
                            <div className="content_inner">
                                <span className="banner_badge">Smart Campus. Smarter Tomorrow.</span>
                                <h1>The All-in-One <span>Command Center</span>for Your Campus</h1>
                                <p>Empower your institution with an AI-driven platform that simplifies administration, enhances communication, and creates a connected learning ecosystem.</p>
                                <div className="banner_btns">
                                    <button type="button" onClick={handleGetStarted}>Get Started Now <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
                                    <button type="button" onClick={handleRedirectSubcriptionPage}><i className="fa-solid fa-circle-play" aria-hidden="true"></i>Watch Demo</button>
                                </div>
                                <div className="banner_trust">
                                    <div className="trust_avatars" aria-hidden="true">
                                        {[0, 1, 2, 3].map((item) => <span key={item}><i className="fa-solid fa-user"></i></span>)}
                                    </div>
                                    <div className="trust_content"><strong>Built for connected institutions</strong><span>Students, teachers and teams ? together</span></div>
                                </div>
                            </div>
                            <span className="banner_note">More<br />Than Just<br />Software</span>
                        </div>
                        <div className="right_content">
                            <span className="dashboard_badge"><i className="fa-solid fa-chart-simple" aria-hidden="true"></i>Manage <b>?</b> Automate <b>?</b> Grow</span>
                            <div className="dashboard_frame"><img src="/images/dashboard.png" alt="Edu Connekt campus management dashboard" /></div>
                            <span className="education_note">Education<br />Today<br />A Brighter<br />Tomorrow</span>
                        </div>
                    </div>
                    <span className="campus_note">?Connecting People<br />Creating Possibilities?</span>
                    <svg className="banner_wave" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 80C170 15 470 95 760 45S1170 -25 1440 12V100H0Z" /></svg>
                </div>

                <div className="about_sec" id="about">
                    <div className="sec_content">
                        <div className="about_content_left">
                            <span className="about_badge">About Edu Connekt</span>
                            <h2>Built for Education.<br />Designed for <span>Impact.</span></h2>
                            <p>Edu Connekt helps institutions streamline operations, improve collaboration, and create a better learning experience for everyone ? students, teachers, and staff.</p>
                            <button type="button" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Learn More <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
                        </div>
                        <div className="about_content_right">
                            <div className="item_box">
                                <span className="icon"><i className="fa-solid fa-bullseye" aria-hidden="true"></i></span>
                                <h3>Our Mission</h3>
                                <p>To empower educational institutions with innovative digital solutions.</p>
                            </div>
                            <div className="item_box">
                                <span className="icon"><i className="fa-regular fa-eye" aria-hidden="true"></i></span>
                                <h3>Our Vision</h3>
                                <p>To be a globally recognized platform for smarter and more connected campuses.</p>
                            </div>
                            <div className="item_box">
                                <span className="icon"><i className="fa-solid fa-user-group" aria-hidden="true"></i></span>
                                <h3>Our Values</h3>
                                <p>Innovation, transparency, student-centricity and continuous growth.</p>
                            </div>
                        </div>
                        <div className="about_image">
                            <img src="/images/about-us.png" alt="Students collaborating in a bright campus learning space" />
                            <span className="image_note">Learning<br />Connecting<br />Growing<br />Together</span>
                        </div>
                    </div>
                </div>

                <div className="scale_sec">
                    <div className="sec_content">
                        <div className="sec_head">
                            <h3>Everything You Need to Scale Excellence</h3>
                            <p>Sophisticated modules designed to handle the nuances of modern educational administration without the clutter.</p>
                        </div>
                        <div className="content_items">
                            <div className="item_box">
                                <div className="box_inner">
                                    <span className="card_icon"><i className="fa-solid fa-file-invoice-dollar" aria-hidden="true"></i></span>
                                    <h5>Finance Management</h5>
                                    <p>Automate fee collection, track expenses, and generate real-time financial reports.</p>
                                    <button className="learn_more" type="button" onClick={handleRedirectPricingPage}>Learn More <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
                                    <i className="card_decoration fa-solid fa-chart-column" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="item_box">
                                <div className="box_inner">
                                    <span className="card_icon"><i className="fa-regular fa-calendar-check" aria-hidden="true"></i></span>
                                    <h5>Academic Planning</h5>
                                    <p>Dynamic scheduling, curriculum mapping, and smart class management.</p>
                                    <button className="learn_more" type="button" onClick={handleRedirectPricingPage}>Learn More <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
                                    <i className="card_decoration fa-solid fa-calendar-days" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="item_box">
                                <div className="box_inner">
                                    <span className="card_icon"><i className="fa-regular fa-user" aria-hidden="true"></i></span>
                                    <h5>Student Information</h5>
                                    <p>A 360° view of every student, from admissions to academic records and performance.</p>
                                    <button className="learn_more" type="button" onClick={handleRedirectPricingPage}>Learn More <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
                                    <i className="card_decoration fa-solid fa-user-group" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="item_box">
                                <div className="box_inner">
                                    <span className="card_icon"><i className="fa-regular fa-message" aria-hidden="true"></i></span>
                                    <h5>Communication Tools</h5>
                                    <p>Stay connected with notices, messages, newsletters, and real-time alerts.</p>
                                    <button className="learn_more" type="button" onClick={handleRedirectPricingPage}>Learn More <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
                                    <i className="card_decoration fa-solid fa-comments" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="stats_sec">
                    <svg className="stats_wave top_wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0H1440V32C1350 -8 850 64 330 42C145 37 55 27 0 5Z" /></svg>
                    <span className="stats_glow" aria-hidden="true"></span>
                    <div className="sec_content">
                        <div className="stat_box">
                            <span className="stat_icon"><i className="fa-solid fa-graduation-cap" aria-hidden="true"></i></span>
                            <div className="stat_content"><span className="stat_value blue">10K+</span><p>STUDENTS MANAGED</p></div>
                        </div>

                        <div className="stat_box">
                            <span className="stat_icon"><i className="fa-solid fa-users" aria-hidden="true"></i></span>
                            <div className="stat_content"><span className="stat_value green">500+</span><p>STAFFS INCLUDED</p></div>
                        </div>

                        <div className="stat_box">
                            <span className="stat_icon"><i className="fa-solid fa-shield-halved" aria-hidden="true"></i></span>
                            <div className="stat_content"><span className="stat_value light">99.9%</span><p>PLATFORM UPTIME</p></div>
                        </div>
                        <div className="stat_box">
                            <span className="stat_icon"><i className="fa-solid fa-heart" aria-hidden="true"></i></span>
                            <div className="stat_content"><span className="stat_value blue">200+</span><p>HAPPY INSTITUTIONS</p></div>
                        </div>
                        <div className="stats_note">Smarter <br />Campuses <br />Happier <br />People</div>
                    </div>
                    <svg className="stats_wave bottom_wave" viewBox="0 0 1440 32" preserveAspectRatio="none" aria-hidden="true"><path d="M0 29C105 -8 460 8 800 6S1330 25 1440 9V32H0Z" /></svg>
                </div>

                <div className="registration_sec" id="register">
                    <div className="sec_content">
                        <div className="image_sec">
                            <img src="/images/connect.png" alt="" />
                        </div>
                        <div className="sec_items">
                            <div
                                className={`item_content_sec${registrationView === 'leaving' ? ' is_leaving' : registrationView === 'returned' ? ' is_visible' : ''}`}
                                hidden={registrationView === 'form' || registrationView === 'returning'}
                                onAnimationEnd={(event) => {
                                    if (event.target === event.currentTarget && registrationView === 'leaving') {
                                        setRegistrationView('form');
                                    } else if (event.target === event.currentTarget && registrationView === 'returned') {
                                        event.currentTarget.querySelector('button')?.focus({ preventScroll: true });
                                    }
                                }}
                            >
                                <div className="content_head">
                                    <span className="content_badge">Education connects people</span>
                                    <h3>Build a Smarter<br />Future for <span>Your Institution</span></h3>
                                    <p>Join EduKonnect and create a digital space where students, teachers and staff stay connected, informed and inspired.</p>
                                </div>
                                <div className="content_features">
                                    <div className="feature_box">
                                        <span className="feature_icon"><i className="fa-solid fa-users" aria-hidden="true"></i></span>
                                        <div className="feature_content"><h4>Easy Student Management</h4><p>Keep student data organized</p></div>
                                    </div>
                                    <div className="feature_box">
                                        <span className="feature_icon"><i className="fa-solid fa-book-open" aria-hidden="true"></i></span>
                                        <div className="feature_content"><h4>Seamless Communication</h4><p>Stay connected with notices, updates and events</p></div>
                                    </div>
                                    <div className="feature_box">
                                        <span className="feature_icon"><i className="fa-solid fa-chart-line" aria-hidden="true"></i></span>
                                        <div className="feature_content"><h4>Smarter Administration</h4><p>Save time with digital workflows</p></div>
                                    </div>
                                    <div className="feature_box">
                                        <span className="feature_icon"><i className="fa-solid fa-shield-halved" aria-hidden="true"></i></span>
                                        <div className="feature_content"><h4>Secure &amp; Reliable</h4><p>Your institution’s data, always safe</p></div>
                                    </div>
                                </div>
                                <div className="content_btn">
                                    <button type="button" aria-controls="institution_registration_form" disabled={registrationView === 'leaving'} onClick={() => setRegistrationView('leaving')}>
                                        Register Your Institution <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                                    </button>
                                    <span className="button_note">⤴ Get Started in Minutes!</span>
                                </div>
                                <div className="content_decoration" aria-hidden="true"><i className="fa-regular fa-paper-plane"></i></div>
                            </div>
                            <div className={`item_inner${registrationView === 'form' ? ' is_visible' : registrationView === 'returning' ? ' is_leaving' : ''}`} id="institution_registration_form" hidden={registrationView !== 'form' && registrationView !== 'returning'} onAnimationEnd={(event) => {
                                if (event.target === event.currentTarget) {
                                    if (registrationView === 'returning') {
                                        setRegistrationView('returned');
                                    } else if (registrationView === 'form') {
                                        event.currentTarget.querySelector('input')?.focus({ preventScroll: true });
                                    }
                                }
                            }}>
                                <div className="form_head">
                                    <h3>Register Your Institution</h3>
                                    <p>Start your digital transformation journey today.</p>
                                </div>
                                <div className="form_sec">
                                    <div className="input_box fullwidth">
                                        <span>Institution Name <p>*</p></span>
                                        <input type="text" placeholder="Enter your institution's name" value={institutionName} onChange={(e) => setInstitutionName(e.target.value)} />
                                    </div>
                                    <div className="input_box halfwidth">
                                        <span>Admin Email <p>*</p></span>
                                        <input type="text" placeholder="admin@institution.edu" value={isEmail} onChange={(e) => setIsEmail(e.target.value)} />
                                    </div>
                                    <div className="input_box halfwidth">
                                        <span>Phone Number <p>*</p></span>
                                        <input type="text" placeholder="+91 (555) 000-0000" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                    </div>
                                    <div className="date_box halfwidth" ref={startTimeRef}>
                                        <span>Start Time <p>*</p></span>
                                        <div className="date_btn" onClick={() => setOpenTimeBox(prev => prev === 'start' ? null : 'start')}>
                                            <p>{institutionTiming.start || 'Set Time'}</p>
                                            <i className="fa-regular fa-clock"></i>
                                        </div>
                                        {openTimeBox === 'start' && (
                                            <div className="time_dropdown">
                                                <TimeBox
                                                    selectedTime={institutionTiming.start}
                                                    onTimeChange={(time) => setInstitutionTiming(prev => ({ ...prev, start: time }))}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div className="date_box halfwidth" ref={endTimeRef}>
                                        <span>End Time <p>*</p></span>
                                        <div className="date_btn" onClick={() => setOpenTimeBox(prev => prev === 'end' ? null : 'end')}>
                                            <p>{institutionTiming.end || 'Set Time'}</p>
                                            <i className="fa-regular fa-clock"></i>
                                        </div>
                                        {openTimeBox === 'end' && (
                                            <div className="time_dropdown">
                                                <TimeBox
                                                    selectedTime={institutionTiming.end}
                                                    onTimeChange={(time) => setInstitutionTiming(prev => ({ ...prev, end: time }))}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div className="select_box halfwidth">
                                        <span>Education Board <p>*</p></span>
                                        <div className="dropdown_sec">
                                            <div className="dropdown_btn" onClick={toggleDropdown}>
                                                <p>{selectedBoard}</p>
                                                <i className={`fa-solid fa-angle-down ${isBoardDropdownOpen ? 'active' : ''}`}></i>
                                            </div>
                                            <div className={`dropdown ${isBoardDropdownOpen ? 'active' : ''}`}>
                                                <div className="dropdown_inner">
                                                    <ul>
                                                        {
                                                            boards.map((board, index) => (
                                                                <li key={index} onClick={() => handleSelectBoard(board)}>{board}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input_box halfwidth">
                                        <span>Affiliation Number<p>*</p></span>
                                        <input type="text" placeholder="enter the number" value={isAffiliationNumber} onChange={(e) => setIsAffiliationNumber(e.target.value)} />
                                    </div>
                                    <div className="text_box" onClick={handleAddressModalOpen}>
                                        <span>Location <p>*</p></span>
                                        <textarea placeholder="Enter your institution's location" readOnly value={selectedAddress} />
                                    </div>
                                    <div className="btn_box">
                                        <button className="form_back_btn" type="button" aria-label="Back to institution overview" title="Back" disabled={registrationView === 'returning' || isButtonLoading} onClick={() => setRegistrationView('returning')}>
                                            <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
                                        </button>
                                        <button
                                            disabled={!isFormValid || isButtonLoading}
                                            onClick={handleRegisterInstitution}
                                        >
                                            {
                                                isButtonLoading ? (
                                                    <ButtonLoader />
                                                ) : (
                                                    <>Register</>
                                                )
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="demo_sec">
                    <div className="sec_content">
                        <div className="demo_items">
                            <div className="demo_head">
                                <h3>Ready to bring intelligence to your campus?</h3>
                                <p>Join hundreds of forward-thinking institutions that have upgraded to the world's most sophisticated management platform.</p>
                            </div>
                            <div className="demo_btn">
                                <button>Request a Demo</button>
                                <button onClick={handleRedirectPricingPage}>View Pricing</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact_sec" id="contact">
                    <div className="sec_content">
                        <div className="content_left">
                            <div className="left_inner">
                                <div className="inner_head">
                                    <h4>Contact Us</h4>
                                </div>
                                <div className="inner_items">
                                    <div className="item_box">
                                        <a className="email"><i className="fa-regular fa-envelope"></i></a>
                                        <div className="content">
                                            <span>EMAIL</span>
                                            <p>educonnekt@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="item_box">
                                        <a className="call"><i className="fa-solid fa-phone"></i></a>
                                        <div className="content">
                                            <span>PHONE</span>
                                            <p>91+ 9449618559</p>
                                        </div>
                                    </div>
                                    <div className="item_box">
                                        <a className="location"><i className="fa-solid fa-location-dot"></i></a>
                                        <div className="content">
                                            <span>LOCATION</span>
                                            <p>THE MERIDIAN Luxury Hotel, District Stadium Main Road(Kurvangi main road), Dhantaramakki, Chikkamagaluru - 577101, Karnataka, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content_right">
                            <div className="right_inner">
                                <div className="input_box">
                                    <input type="text" placeholder="Full Name" />
                                </div>
                                <div className="input_box">
                                    <input type="text" placeholder="Email Address" />
                                </div>
                                <div className="text_box">
                                    <textarea placeholder="Enter Message" />
                                </div>
                                <div className="btn_box">
                                    <button>Send Inquiry</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <SelectAddressModal
                    isShowAddressModal={showAddressModal}
                    setIsShowAddressModal={setShowAddressModal}
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                    setSelectState={setSelectState}
                    setSelectCity={setSelectCity}
                    setLat={setLat}
                    setLng={setLng}
                    initialSelectedState={selectState}
                    initialSelectedCity={selectCity}
                    isAdmin={false}
                />

                <SuccessModal
                    isSuccessModalOpen={isSuccessModalOpen}
                    setIsSuccessModalOpen={setIsSuccessModalOpen}
                />
            </HomePageWrapper>
        </>
    );
}

export default HomePage;
