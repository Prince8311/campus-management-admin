import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import CreateFieldsModal from "../../../Components/Modals/Setting/CreateFields";
import { SectionFieldsWrapper } from "../../../Styles/SettingStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";

const SortableItem = ({ field, selectedId, onSelect }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: field.id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <div ref={setNodeRef} style={style} className="field_box">
            <div
                className="field_image"
                {...attributes}
                {...listeners}
                style={{ cursor: "grab" }}
            >
                <img src="/images/drag-icon.png" alt="" />
            </div>
            <li
                className={selectedId === field.id ? "active" : ""}
                onClick={() => onSelect(field)}
            >
                <p>{field.form_field}</p>
                <i className="fa-solid fa-angle-right"></i>
            </li>

        </div>
    );
};

const SectionFieldsPage = () => {
    const api = getApiEndpoints();
    const navigate = useNavigate();
    const sectionData = JSON.parse(localStorage.getItem("sectionData"));
    const types = [
        { key: 'textbox', value: 'Textbox' },
        { key: 'number', value: 'Number' },
        { key: 'date', value: 'Date' },
        { key: 'dropdown', value: 'Dropdown' },
        { key: 'multi-select-dropdown', value: 'Multi-select Dropdown' },
    ];
    const [isCreateFieldsOpen, setIsCreateFieldsOpen] = useState(false);
    const [formFields, setFormFields] = useState([]);
    const [isInitialFieldsLoading, setIsInitialFieldsLoading] = useState(true);
    const [selectedFormField, setSelectedFormField] = useState({});
    const [editedName, setEditedName] = useState('');
    const [editedRequired, setEditedRequired] = useState(false);
    const [editedItems, setEditedItems] = useState([]);
    const [itemInput, setItemInput] = useState('');

    useEffect(() => {
        if (!sectionData) {
            navigate("/admin/settings/profile-settings/student");
        }
    }, [sectionData, navigate]);

    const fetchFormFields = async (showSkeleton = false) => {
        if (showSkeleton) {
            setIsInitialFieldsLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchStudentFormFields, {
                params: { sectionId: sectionData.sectionId }
            });
            if (response?.data.status === 200) {
                const fields = response?.data.fields || [];
                setFormFields(fields);
                if (fields.length > 0 && !selectedFormField?.id) {
                    setSelectedFormField(fields[0]);
                }
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialFieldsLoading(false);
        }
    }

    useEffect(() => {
        if (sectionData) {
            fetchFormFields(true);
        }
    }, []);

    useEffect(() => {
        if (selectedFormField?.id) {
            setEditedName(selectedFormField.form_field || '');
            setEditedRequired(!!selectedFormField.is_required);
            setEditedItems(selectedFormField.items || []);
        }
    }, [selectedFormField]);

    const isDropdownType = selectedFormField.field_type === 'dropdown' || selectedFormField.field_type === 'multi-select-dropdown';

    const handleItemKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const trimmedValue = itemInput.trim();
            if (!trimmedValue) return;

            if (editedItems.includes(trimmedValue)) {
                toast.error("Item already added");
                return;
            }

            setEditedItems([...editedItems, trimmedValue]);
            setItemInput('');
        }
    };

    const handleRemoveItem = (indexToRemove) => {
        setEditedItems(editedItems.filter((_, index) => index !== indexToRemove));
    };

    const handleDragEnd = async (event) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        const oldIndex = formFields.findIndex(i => i.id === active.id);
        const newIndex = formFields.findIndex(i => i.id === over.id);

        const newOrder = arrayMove(formFields, oldIndex, newIndex);
        setFormFields(newOrder);

        try {
            const payload = newOrder.map((item, index) => ({
                id: item.id,
                sort_order: index + 1
            }));

            await axiosInstance.post(api.updateStudentFormFieldOrder, {
                sectionId: sectionData.sectionId,
                fields: payload
            });
        } catch (error) {
            toast.error("Failed to update order");
        }
    };


    const isChanged = editedName !== selectedFormField?.form_field || editedRequired !== selectedFormField?.is_required || JSON.stringify(editedItems) !== JSON.stringify(selectedFormField?.items || []);

    return (
        <>
            <SectionFieldsWrapper>
                <div className="wrapper_content">
                    <div className="content_top">
                        <div className="box_head">
                            <h6>{sectionData.userType}</h6>
                            <span><i className="fa-solid fa-angle-right"></i></span>
                            <h6>{sectionData.sectionType === 'profile_info' ? 'Profile Information' : 'Documents'}</h6>
                            <span><i className="fa-solid fa-angle-right"></i></span>
                            <h6>{sectionData.sectionName}</h6>
                        </div>
                        <div className="add_btn">
                            <button onClick={() => setIsCreateFieldsOpen(true)}>
                                <i className="fa-solid fa-plus"></i>
                                <p>Create Field</p>
                            </button>
                        </div>
                    </div>
                    <div className="content_bottom">
                        {
                            isInitialFieldsLoading ? (
                                <>
                                    <div className="left_content">
                                        <div className="left_content_inner">
                                            {
                                                Array.from({ length: 5 }).map((_, i) => (
                                                    <SkeletonLoader key={i} width="100%" height="40px" margin="0 0 10px 0" />
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="right_content">
                                        <div className="right_content_inner">
                                            <SkeletonLoader width="125px" height="18px" />
                                            <div className="input_field_sec">
                                                <div className="input_box">
                                                    <SkeletonLoader width="100%" height="37px" />
                                                </div>
                                                <SkeletonLoader width="160px" height="37px" />
                                            </div>
                                            <SkeletonLoader width="100%" height="37px" margin="15px 0 0 0" />
                                        </div>
                                    </div>
                                </>
                            ) : formFields.length > 0 ? (
                                <>
                                    <div className="left_content">
                                        <div className="left_content_inner">
                                            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                                                <SortableContext
                                                    items={formFields.map(f => f.id)}
                                                    strategy={verticalListSortingStrategy}
                                                >
                                                    {formFields.map(field => (
                                                        <SortableItem
                                                            key={field.id}
                                                            field={field}
                                                            selectedId={selectedFormField?.id}
                                                            onSelect={setSelectedFormField}
                                                        />
                                                    ))}
                                                </SortableContext>
                                            </DndContext>
                                        </div>
                                    </div>
                                    <div className="right_content">
                                        <div className="right_content_inner">
                                            <h6>Field Type: <span>{types.find(t => t.key === selectedFormField.field_type)?.value || '-'}</span></h6>
                                            <div className="input_field_sec">
                                                <div className="input_box">
                                                    <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} required />
                                                    <span>Field Name</span>
                                                </div>
                                                <button disabled={!isChanged}>Save</button>
                                            </div>
                                            {
                                                isDropdownType && (
                                                    <div className="item_box">
                                                        <div className="box_content">
                                                            {
                                                                editedItems.map((item, index) => (
                                                                    <li key={index}>
                                                                        <p>{item}</p>
                                                                        <span onClick={() => handleRemoveItem(index)}>
                                                                            <i className="fa-solid fa-circle-xmark"></i>
                                                                        </span>
                                                                    </li>
                                                                ))
                                                            }
                                                            <input
                                                                type="text"
                                                                placeholder="Type item name"
                                                                value={itemInput}
                                                                onChange={(e) => setItemInput(e.target.value)}
                                                                onKeyDown={handleItemKeyDown}
                                                            />
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            <div className="mandatory_sec">
                                                <p>Make this field mandatory</p>
                                                <div className="toggle_bar">
                                                    <input
                                                        type="checkbox"
                                                        id="status"
                                                        checked={editedRequired}
                                                        onChange={(e) => setEditedRequired(e.target.checked)}
                                                    />
                                                    <label htmlFor="status">
                                                        <span></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="empty_box">
                                    <img src="/images/no-fields.svg" alt="" />
                                    <p>No fields available</p>
                                </div>
                            )
                        }
                    </div>
                </div>

                <CreateFieldsModal
                    isCreateFieldsOpen={isCreateFieldsOpen}
                    setIsCreateFieldsOpen={setIsCreateFieldsOpen}
                    refreshFormFields={() => fetchFormFields(false)}
                />
            </SectionFieldsWrapper>
        </>
    )
};

export default SectionFieldsPage;