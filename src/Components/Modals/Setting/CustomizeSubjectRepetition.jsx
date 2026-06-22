import { useState } from "react";
import { CustomizeSubjectRepetitionWrapper } from "../../../Styles/SettingModalStyle";

const CustomizeSubjectRepetitionModal = ({ isCustomizeSubjectOpen, setIsCustomizeSubjectOpen, subjects = [], subjectRepeatData = [], setSubjectRepeatData }) => {
    const types = ['Maximum', 'Minimum', 'Exactly'];
    const selectedRepeatSubjects = subjectRepeatData.map((repeatItem) => repeatItem.subject);
    const availableSubjects = subjects.filter((subject) => !selectedRepeatSubjects.includes(subject));
    const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
    const [showTypeDropdown, setShowTypeDropdown] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [repeatValue, setRepeatValue] = useState('');
    const isSaveDisabled = !selectedSubject || !selectedType || !repeatValue.trim();

    function closeModal() {
        setIsCustomizeSubjectOpen(false);
        setSelectedSubject('');
        setSelectedType('');
        setRepeatValue('');
    }

    function toggleSubjectDropdown() {
        setShowSubjectDropdown(!showSubjectDropdown);
        setShowTypeDropdown(false);
    }

    function toggleTypeDropdown() {
        setShowTypeDropdown(!showTypeDropdown);
        setShowSubjectDropdown(false);
    }

    const handleSelectSubject = (subject) => {
        if (selectedSubject === subject) return;
        setSelectedSubject(subject);
        setSelectedType('');
        setRepeatValue('');
        setShowSubjectDropdown(false);
    }

    const handleSelectType = (type) => {
        if (selectedType === type) return;
        setSelectedType(type);
        setRepeatValue('');
        setShowTypeDropdown(false);
    }

    const handleSave = () => {
        if (isSaveDisabled) return;

        setSubjectRepeatData((prevData) => [
            ...prevData,
            {
                subject: selectedSubject,
                type: selectedType,
                value: repeatValue.trim()
            }
        ]);
        closeModal();
    }

    return (
        <>
            <CustomizeSubjectRepetitionWrapper className={isCustomizeSubjectOpen ? 'active' : ''}>
                <div className={`modal_box ${isCustomizeSubjectOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Select Customize Subject Repetition</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box fullwidth">
                                <span>Select Subject <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleSubjectDropdown}>
                                        <p>{selectedSubject}</p>
                                        <i className={`fa-solid fa-angle-down ${showSubjectDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showSubjectDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    availableSubjects.length > 0 ? (
                                                        availableSubjects.map((subject, i) =>
                                                            <li key={i} className={selectedSubject === subject ? 'active' : ''} onClick={() => handleSelectSubject(subject)}>{subject}</li>
                                                        )
                                                    ) : (
                                                        <li className="empty_message">No subjects available.</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box halfwidth">
                                <span>Value Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleTypeDropdown}>
                                        <p>{selectedType}</p>
                                        <i className={`fa-solid fa-angle-down ${showTypeDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown up_drop ${showTypeDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    types.map((type, i) =>
                                                        <li key={i} className={selectedType === type ? 'active' : ''} onClick={() => handleSelectType(type)}>{type}</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box">
                                <span>Value <p>*</p></span>
                                <input type="text" value={repeatValue} onChange={(e) => setRepeatValue(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button disabled={isSaveDisabled} onClick={handleSave}>Save</button>
                    </div>
                </div>
            </CustomizeSubjectRepetitionWrapper>
        </>
    );
}

export default CustomizeSubjectRepetitionModal;
