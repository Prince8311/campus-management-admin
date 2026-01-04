import { StudentWiseAcademicWrapper } from "../../../Styles/ReportsStyle";

const StudentWiseAcademicPage = () => {
    return (
        <>
            <StudentWiseAcademicWrapper>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Class</th>
                                <th>Subject</th>
                                <th>PERIODIC TESt2</th>
                                <th>PERIODIC TESt3</th>
                                <th>PERIODIC TESt PART A</th>
                                <th>PERIODIC TESt PART B</th>
                                <th>PRE BOARD 1</th>
                                <th>Periodic Assessment 1</th>
                                <th>Periodic Assessment 2</th>
                                <th>Periodic Assessment 3</th>
                                <th>Grand total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowspan="7">A D PUNYA PATEL</td>
                                <td rowspan="7">4 - B</td>
                                <td>Social Science</td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td>18</td>
                                <td>20</td>
                                <td>17</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <td>Science</td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td>18</td>
                                <td>00</td>
                                <td>00</td>
                                <td>88</td>
                            </tr>
                            <tr>
                                <td>Maths</td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td>14</td>
                                <td>16</td>
                                <td>16</td>
                                <td>110</td>
                            </tr>
                            <tr>
                                <td>Kannada</td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td>20</td>
                                <td>00</td>
                                <td>00</td>
                                <td>98</td>
                            </tr>
                            <tr>
                                <td>Hindi</td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td>13</td>
                                <td>14</td>
                                <td>0</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>English</td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td>20</td>
                                <td>15</td>
                                <td>20</td>
                                <td>126</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td><i className="fa-solid fa-minus"></i></td>
                                <td>103</td>
                                <td>65</td>
                                <td>53</td>
                                <td>569</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </StudentWiseAcademicWrapper>
        </>
    );
}

export default StudentWiseAcademicPage;