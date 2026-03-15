import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ClassroomDetailsWrapper } from "../../../Styles/AcademicStyle";

const ClassroomDetailsPage = () => {
    return (
        <>
            <ClassroomDetailsWrapper>
                <div className="page_head">
                    <h2>10 - A</h2>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={8}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <li>10 - A</li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li className='active'>10 -B</li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li>10 - C</li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li>10 - D</li>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="class_teacher_sec">
                    <div className="sec_inner">
                        <div className="inner_top_sec">
                            <h5>Manage class teacher for 10 - A</h5>
                            <p>Class teacher is responsible for day to day activities of the class</p>
                        </div>
                        <div className="inner_bottom_sec">
                            <div className="teacher_name_sec">
                                <div className="left_sec">
                                    <h6>PK</h6>
                                </div>
                                <div className="right_sec">
                                    <p>POONAM C K</p>
                                    <span>91-7760390715</span>
                                </div>
                            </div>
                            <div className="btn_sec">
                                <button>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="class_details_sec">
                    <div className="details_box">
                        <div className="box_head_sec">
                            <div className="head_content">
                                <h4>Manage subjects for 10 - A</h4>
                                <p>Add/remove subjects for the class and assign teachers to respective subjects</p>
                                <div className="search_sec">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                    <input type="text" placeholder="Search by Subject..." />
                                </div>
                            </div>
                            <div className="add_btn">
                                <button>
                                    <i className="fa-solid fa-plus"></i>
                                    <p>Add Subject</p>
                                </button>
                            </div>
                        </div>
                        <div className="box_item_sec">
                            <div className="item">
                                <div className="item_inner">
                                    <div className="top_part">
                                        <div className="part_content">
                                            <a><i className="fa-solid fa-book-open"></i></a>
                                            <h6>Subject Name</h6>
                                            <span>1000 Students</span>
                                        </div>
                                        <div className="teacher_sec">
                                            <div className="teacher_box">
                                                <div className="teacher_heading">
                                                    <h5>Subject Teacher</h5>
                                                    <li>
                                                        <a className='edit'><i className="fa-solid fa-pen-to-square"></i>Edit</a>
                                                        {/* <a className='add'><i className="fa-solid fa-plus"></i>Add</a> */}
                                                    </li>
                                                </div>
                                                <p>SOMASHEKAR M BHAIRANATTI</p>
                                                <span>91-9916068002</span>
                                            </div>
                                            <div className="teacher_box">
                                                <div className="teacher_heading">
                                                    <h5>Co Teacher</h5>
                                                    <li>
                                                        <button className='add'>Add / Remove<i className="fa-solid fa-angle-right"></i></button>
                                                    </li>
                                                </div>
                                                <p>SOMASHEKAR M BHAIRANATTI</p>
                                                <span>91-9916068002</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom_btn">
                                        <div className="left_btns">
                                            <a className="left_box">
                                                <h6>Compulsory</h6>
                                            </a>
                                            <a className="left_box active">
                                                <h6>Optional</h6>
                                            </a>
                                        </div>
                                        <div className="right_btns">
                                            <button className="edit">Edit Name</button>
                                            <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_inner">
                                    <div className="top_part">
                                        <div className="part_content">
                                            <a><i className="fa-solid fa-book-open"></i></a>
                                            <h6>Subject Name</h6>
                                            <span>1000 Students</span>
                                        </div>
                                        <div className="teacher_sec">
                                            <div className="teacher_box">
                                                <div className="teacher_heading">
                                                    <h5>Subject Teacher</h5>
                                                    <li>
                                                        <a className='edit'><i className="fa-solid fa-pen-to-square"></i>Edit</a>
                                                        {/* <a className='add'><i className="fa-solid fa-plus"></i>Add</a> */}
                                                    </li>
                                                </div>
                                                <p>SOMASHEKAR M BHAIRANATTI</p>
                                                <span>91-9916068002</span>
                                            </div>
                                            <div className="teacher_box">
                                                <div className="teacher_heading">
                                                    <h5>Co Teacher</h5>
                                                    <li>
                                                        <button className='add'>Add/Remove<i className="fa-solid fa-angle-right"></i></button>
                                                    </li>
                                                </div>
                                                <p>SOMASHEKAR M BHAIRANATTI</p>
                                                <span>91-9916068002</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom_btn">
                                        <div className="left_btns">
                                            <a className="left_box">
                                                <h6>Compulsory</h6>
                                            </a>
                                            <a className="left_box active">
                                                <h6>Optional</h6>
                                            </a>
                                        </div>
                                        <div className="right_btns">
                                            <button className="edit">Edit Name</button>
                                            <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_inner">
                                    <div className="top_part">
                                        <div className="part_content">
                                            <a><i className="fa-solid fa-book-open"></i></a>
                                            <h6>Subject Name</h6>
                                            <span>1000 Students</span>
                                        </div>
                                        <div className="teacher_sec">
                                            <div className="teacher_box">
                                                <div className="teacher_heading">
                                                    <h5>Subject Teacher</h5>
                                                    <li>
                                                        <a className='edit'><i className="fa-solid fa-pen-to-square"></i>Edit</a>
                                                        {/* <a className='add'><i className="fa-solid fa-plus"></i>Add</a> */}
                                                    </li>
                                                </div>
                                                <p>SOMASHEKAR M BHAIRANATTI</p>
                                                <span>91-9916068002</span>
                                            </div>
                                            <div className="teacher_box">
                                                <div className="teacher_heading">
                                                    <h5>Co Teacher</h5>
                                                    <li>
                                                        <button className='add'>Add/Remove<i className="fa-solid fa-angle-right"></i></button>
                                                    </li>
                                                </div>
                                                <p>SOMASHEKAR M BHAIRANATTI</p>
                                                <span>91-9916068002</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom_btn">
                                        <div className="left_btns">
                                            <a className="left_box">
                                                <h6>Compulsory</h6>
                                            </a>
                                            <a className="left_box active">
                                                <h6>Optional</h6>
                                            </a>
                                        </div>
                                        <div className="right_btns">
                                            <button className="edit">Edit Name</button>
                                            <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ClassroomDetailsWrapper>
        </>
    );
}

export default ClassroomDetailsPage;