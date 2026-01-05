import { TeacherWiseAcademicWrapper } from "../../../Styles/ReportsStyle";

const TeacherWiseAcademicPage = () => {
    return (
        <>
            <TeacherWiseAcademicWrapper>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Teacher Name</th>
                                <th>Class</th>
                                <th>Subject</th>
                                <th>Exam</th>
                                <th>Passed Students</th>
                                <th>Total Student</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>NITHEESH BHAT</td>
                                <td>4 - B</td>
                                <td>Social Science</td>
                                <td>PERIODIC TEST PART A</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td rowspan="2">SHASHIKALA S</td>
                                <td rowspan="2">6 - E</td>
                                <td rowspan="2">Social Science</td>
                                <td>PERIODIC TEST PART A</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>PERIODIC TEST PART A</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </TeacherWiseAcademicWrapper>
        </>
    );
}

export default TeacherWiseAcademicPage;