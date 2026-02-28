import { FormFieldWrapper } from "../Styles/LayoutStyle";

const FormField = ({ label, type }) => {
    return (
        <>
            <FormFieldWrapper>
                <div className="field_inner">
                    <span>{label} <p>*</p></span>
                    {
                        type === 'textbox' &&
                        <div className="input_box">
                            <input type="text" />
                        </div>
                    }
                    {
                        type === 'number' &&
                        <div className="input_box">
                            <input type="number" />
                        </div>
                    }
                    {
                        type === 'dropdown' &&
                        <div className="select_box">
                            <div className="select_btn">
                                <p>Type</p>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>
                            <div className="dropdown"></div>
                        </div>
                    }
                    {
                        type === 'multi-select-dropdown' &&
                        <div className="multi_select_box">
                            <div className="select_btn">
                                <p>MultiType</p>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>
                            <div className="dropdown"></div>
                        </div>
                    }
                    {
                        type === 'date' &&
                        <div className="date_box">
                            <div className="date_btn">
                                <p>Date</p>
                                <i className="fa-regular fa-calendar"></i>
                            </div>
                            <div className="dropdown"></div>
                        </div>
                    }
                </div>
            </FormFieldWrapper>
        </>
    );
}

export default FormField;