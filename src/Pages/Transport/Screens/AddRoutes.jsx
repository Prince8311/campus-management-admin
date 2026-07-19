import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddRoutesWrapper } from "../../../Styles/TransportStyle";
import { toast } from "react-toastify";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import ButtonLoader from "../../../Components/Loader/ButtonLoader";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import { UserData } from "../../../Context/PageContext";
import { DirectionsRenderer, GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { googleMapsLoaderOptions } from "../../../Services/Api/GoogleMapsConfig";

const AddRoutesPage = () => {
    const api = getApiEndpoints();
    const navigate = useNavigate();
    const { userDetails } = UserData();
    const mapRef = useRef(null);
    const { isLoaded: isMapLoaded, loadError } = useJsApiLoader(googleMapsLoaderOptions);
    const instLat = parseFloat(userDetails?.institution?.latitude);
    const instLng = parseFloat(userDetails?.institution?.longitude);
    const instCenter = (isFinite(instLat) && isFinite(instLng))
        ? { lat: instLat, lng: instLng }
        : { lat: 20.5937, lng: 78.9629 };
    const [vehicleList, setVehicleList] = useState([]);
    const [isVehiclesLoading, setIsVehiclesLoading] = useState(false);
    const [showVehicleDropdown, setShowVehicleDropdown] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [isStaffsLoading, setIsStaffsLoading] = useState(false);
    const [showStaffDropdown, setShowStaffDropdown] = useState(false);
    const [staffList, setStaffList] = useState([]);
    const [selectedStaffs, setSelectedStaffs] = useState([]);
    const [openStaffGroups, setOpenStaffGroups] = useState({});
    const [isStopagesLoading, setIsStopagesLoading] = useState(false);
    const [stopageList, setStopageList] = useState([]);
    const [openStopageDropdownId, setOpenStopageDropdownId] = useState(null);
    const [selectedStopagesByBox, setSelectedStopagesByBox] = useState({});
    const [isDropUpMap, setIsDropUpMap] = useState({});
    const stopageBtnRefs = useRef({});
    const stopageCardRefs = useRef({});
    const stopagePositionRef = useRef({});
    const [stopages, setStopages] = useState([{ id: 1, label: "Stopage 1" }]);
    const [directionsResult, setDirectionsResult] = useState(null);
    const [draggingStopageId, setDraggingStopageId] = useState(null);
    const selectedStopageIds = new Set(
        Object.values(selectedStopagesByBox)
            .map((stopage) => stopage?.id)
            .filter(Boolean)
    );
    const canAddMoreStopages = isStopagesLoading || stopageList.some((stopage) => !selectedStopageIds.has(stopage.id));

    const captureStopagePositions = () => {
        const previousPositions = {};
        Object.entries(stopageCardRefs.current).forEach(([id, element]) => {
            if (element) {
                previousPositions[id] = element.getBoundingClientRect();
            }
        });
        stopagePositionRef.current = previousPositions;
    };

    const getProjectedStopageOrder = (stopageBoxes, stopageSelections) => {
        const selectedEntries = stopageBoxes
            .map((box) => {
                const stopage = stopageSelections[box.id];
                if (!stopage) return null;

                const lat = Number.parseFloat(stopage.latitude);
                const lng = Number.parseFloat(stopage.longitude);

                if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
                    return null;
                }

                return {
                    box,
                    stopage: {
                        ...stopage,
                        lat,
                        lng
                    }
                };
            })
            .filter(Boolean);

        if (selectedEntries.length <= 1) {
            return stopageBoxes;
        }

        const routeAnchor = selectedEntries.reduce((farthest, current) => {
            const farthestDistance = Math.pow(farthest.stopage.lat - instCenter.lat, 2) + Math.pow(farthest.stopage.lng - instCenter.lng, 2);
            const currentDistance = Math.pow(current.stopage.lat - instCenter.lat, 2) + Math.pow(current.stopage.lng - instCenter.lng, 2);
            return currentDistance > farthestDistance ? current : farthest;
        });

        const baseVector = {
            lat: routeAnchor.stopage.lat - instCenter.lat,
            lng: routeAnchor.stopage.lng - instCenter.lng
        };
        const baseLengthSq = Math.pow(baseVector.lat, 2) + Math.pow(baseVector.lng, 2);

        const sortedSelectedBoxes = [...selectedEntries]
            .sort((a, b) => {
                if (!baseLengthSq) {
                    const aDistance = Math.pow(a.stopage.lat - instCenter.lat, 2) + Math.pow(a.stopage.lng - instCenter.lng, 2);
                    const bDistance = Math.pow(b.stopage.lat - instCenter.lat, 2) + Math.pow(b.stopage.lng - instCenter.lng, 2);
                    return aDistance - bDistance;
                }

                const aProjection = ((a.stopage.lat - instCenter.lat) * baseVector.lat + (a.stopage.lng - instCenter.lng) * baseVector.lng) / baseLengthSq;
                const bProjection = ((b.stopage.lat - instCenter.lat) * baseVector.lat + (b.stopage.lng - instCenter.lng) * baseVector.lng) / baseLengthSq;

                if (aProjection === bProjection) {
                    const aDistance = Math.pow(a.stopage.lat - instCenter.lat, 2) + Math.pow(a.stopage.lng - instCenter.lng, 2);
                    const bDistance = Math.pow(b.stopage.lat - instCenter.lat, 2) + Math.pow(b.stopage.lng - instCenter.lng, 2);
                    return aDistance - bDistance;
                }

                return aProjection - bProjection;
            })
            .map((entry) => entry.box);

        const selectedBoxIds = new Set(sortedSelectedBoxes.map((box) => box.id));
        const unselectedBoxes = stopageBoxes.filter((box) => !selectedBoxIds.has(box.id));

        return [...sortedSelectedBoxes, ...unselectedBoxes];
    };

    const selectedStopageMarkers = stopages
        .map((box) => {
            const stopage = selectedStopagesByBox[box.id];
            if (!stopage) return null;
            const lat = Number.parseFloat(stopage.latitude);
            const lng = Number.parseFloat(stopage.longitude);
            if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
            return { ...stopage, lat, lng };
        })
        .filter(Boolean);

    const handleRedirectionRoutesPage = () => {
        navigate("/admin/transport-management/routes");
    }

    const handleVehicleDropdown = () => {
        setShowVehicleDropdown(!showVehicleDropdown);
        setShowStaffDropdown(false);
    }

    const fetchVehicleList = async () => {
        setIsVehiclesLoading(true);
        try {
            const response = await axiosInstance.get(api.fetchVehicles, {
                params: {
                    isForm: true
                }
            });
            if (response?.data.status === 200) {
                setVehicleList(response?.data.vehicles);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsVehiclesLoading(false);
        }
    }

    useEffect(() => {
        if (showVehicleDropdown) {
            fetchVehicleList();
        }
    }, [showVehicleDropdown]);

    const handleSelectVehicle = (vehicle) => {
        if (selectedVehicle && selectedVehicle?.id === vehicle.id) return;
        setSelectedVehicle(vehicle);
        setShowVehicleDropdown(false);
    }

    const handleStaffDropdown = () => {
        setShowStaffDropdown(!showStaffDropdown);
        setShowVehicleDropdown(false);
    }

    const fetchStaffList = async () => {
        setIsStaffsLoading(true);
        try {
            const response = await axiosInstance.get(api.fetchVehicleStaffs, {
                params: {
                    isForm: true
                }
            });
            if (response?.data.status === 200) {
                setStaffList(response?.data.list || []);
                const initialOpen = {};
                (response?.data.list || []).forEach((group) => {
                    initialOpen[group.role] = true;
                });
                setOpenStaffGroups(initialOpen);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsStaffsLoading(false);
        }
    }

    useEffect(() => {
        if (showStaffDropdown) {
            fetchStaffList();
        }
    }, [showStaffDropdown]);

    const toggleStaffGroup = (role) => {
        setOpenStaffGroups((prev) => ({ ...prev, [role]: !prev[role] }));
    };

    const toggleStaffSelection = (staff) => {
        setSelectedStaffs((prev) => {
            const exists = prev.find((s) => s.id === staff.id);
            return exists ? prev.filter((s) => s.id !== staff.id) : [...prev, staff];
        });
    };

    const getStaffDisplayLabel = () => {
        if (selectedStaffs.length === 0) return '';
        if (selectedStaffs.length === 1) return selectedStaffs[0].name;
        return `${selectedStaffs.length} staff selected`;
    };

    const handleAddStopage = () => {
        setStopages((prevStopages) => [
            ...prevStopages,
            { id: Date.now(), label: `Stopage ${prevStopages.length + 1}` }
        ]);
    }

    const reorderStopages = (fromId, toId) => {
        if (fromId === toId) return;

        captureStopagePositions();

        setStopages((prev) => {
            const fromIndex = prev.findIndex((stopage) => stopage.id === fromId);
            const toIndex = prev.findIndex((stopage) => stopage.id === toId);

            if (fromIndex === -1 || toIndex === -1) {
                return prev;
            }

            const next = [...prev];
            const [moved] = next.splice(fromIndex, 1);
            next.splice(toIndex, 0, moved);
            return next;
        });
    };

    const reorderStopagesByIdOrder = (orderedIds) => {
        if (!orderedIds.length) return;

        captureStopagePositions();
        setStopages((prev) => {
            const stopageMap = new Map(prev.map((stopage) => [stopage.id, stopage]));
            const orderedStopages = orderedIds.map((id) => stopageMap.get(id)).filter(Boolean);
            const orderedIdSet = new Set(orderedIds);
            const remainingStopages = prev.filter((stopage) => !orderedIdSet.has(stopage.id));
            const next = [...orderedStopages, ...remainingStopages];

            if (next.length === prev.length && next.every((stopage, index) => stopage.id === prev[index]?.id)) {
                return prev;
            }

            return next;
        });
    };

    useEffect(() => {
        const previousPositions = stopagePositionRef.current;
        const animationFrame = requestAnimationFrame(() => {
            Object.entries(stopageCardRefs.current).forEach(([id, element]) => {
                if (!element) return;

                const previousRect = previousPositions[id];
                if (!previousRect) return;

                const currentRect = element.getBoundingClientRect();
                const deltaY = previousRect.top - currentRect.top;

                if (!deltaY) return;

                element.style.transition = "none";
                element.style.transform = `translateY(${deltaY}px)`;
                element.getBoundingClientRect();
                element.style.transition = "transform 220ms ease";
                element.style.transform = "translateY(0)";
            });

            stopagePositionRef.current = {};
        });

        return () => cancelAnimationFrame(animationFrame);
    }, [stopages]);

    const handleDeleteStopage = (boxId) => {
        setStopages((prev) => prev.filter((s) => s.id !== boxId));
        setSelectedStopagesByBox((prev) => {
            const updated = { ...prev };
            delete updated[boxId];
            return updated;
        });
        if (openStopageDropdownId === boxId) setOpenStopageDropdownId(null);
        if (draggingStopageId === boxId) setDraggingStopageId(null);
    };

    const checkStopageDropPosition = (boxId) => {
        const btn = stopageBtnRefs.current[boxId];
        if (!btn) return;
        const rect = btn.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        setIsDropUpMap((prev) => ({ ...prev, [boxId]: spaceBelow <= 220 }));
    };

    const handleStopageDropdown = (boxId) => {
        setOpenStopageDropdownId((prev) => {
            const opening = prev !== boxId;
            if (opening) {
                requestAnimationFrame(() => checkStopageDropPosition(boxId));
            }
            return opening ? boxId : null;
        });
    };

    const handleSelectStopageForBox = (boxId, stopageOption) => {
        captureStopagePositions();
        setSelectedStopagesByBox((prev) => {
            const updatedSelections = {
                ...prev,
                [boxId]: stopageOption
            };

            setStopages((prevStopages) => getProjectedStopageOrder(prevStopages, updatedSelections));
            return updatedSelections;
        });
        setOpenStopageDropdownId(null);
    };

    const fetchStopageList = async () => {
        setIsStopagesLoading(true);
        try {
            const response = await axiosInstance.get(api.fetchStopages, {
                params: {
                    isForm: true
                }
            });
            if (response?.data.status === 200) {
                setStopageList(response?.data.stopages || []);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsStopagesLoading(false);
        }
    }

    useEffect(() => {
        fetchStopageList();
    }, []);

    const selectedMarkerIds = selectedStopageMarkers.map((s) => s.id).join(',');

    useEffect(() => {
        if (!isMapLoaded || !window.google?.maps || selectedStopageMarkers.length === 0) {
            setDirectionsResult(null);
            return;
        }

        const directionsService = new window.google.maps.DirectionsService();
        const sortedMarkers = getProjectedStopageOrder(
            selectedStopageMarkers.map((stopage) => ({ id: stopage.id })),
            selectedStopageMarkers.reduce((acc, stopage) => {
                acc[stopage.id] = stopage;
                return acc;
            }, {})
        ).map((box) => selectedStopageMarkers.find((stopage) => stopage.id === box.id)).filter(Boolean);

        const routeWaypoints = sortedMarkers.slice(0, -1);
        const waypoints = routeWaypoints.map((s) => ({
            location: { lat: s.lat, lng: s.lng },
            stopover: true
        }));
        const destination = sortedMarkers[sortedMarkers.length - 1];

        directionsService.route(
            {
                origin: instCenter,
                destination: { lat: destination.lat, lng: destination.lng },
                waypoints,
                travelMode: window.google.maps.TravelMode.DRIVING,
                optimizeWaypoints: true
            },
            (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    setDirectionsResult(result);

                    const waypointOrder = result?.routes?.[0]?.waypoint_order || [];
                    const optimizedWaypoints = waypointOrder.length > 0
                        ? waypointOrder.map((index) => routeWaypoints[index]).filter(Boolean)
                        : routeWaypoints;
                    const optimizedStopageIds = [...optimizedWaypoints, destination].map((stopage) => stopage.id);

                    reorderStopagesByIdOrder(optimizedStopageIds);
                } else {
                    setDirectionsResult(null);
                }
            }
        );
    }, [isMapLoaded, selectedMarkerIds]);

    useEffect(() => {
        if (!isMapLoaded || !mapRef.current || !window.google?.maps) {
            return;
        }

        if (selectedStopageMarkers.length === 0) {
            mapRef.current.panTo(instCenter);
            mapRef.current.setZoom(14);
            return;
        }

        const bounds = new window.google.maps.LatLngBounds();
        bounds.extend(instCenter);

        selectedStopageMarkers.forEach((stopage) => {
            bounds.extend({ lat: stopage.lat, lng: stopage.lng });
        });

        mapRef.current.fitBounds(bounds, 80);
    }, [instCenter.lat, instCenter.lng, isMapLoaded, selectedStopageMarkers]);

    return (
        <>
            <AddRoutesWrapper>
                <div className="page_items">
                    <div className="left_items">
                        <div className="item_inner">
                            <div className="page_head">
                                <div className="icon" onClick={handleRedirectionRoutesPage}><i className="fa-solid fa-angle-left"></i></div>
                                <h2>Add Routes</h2>
                            </div>
                            <div className="top_sec">
                                <div className="input_box">
                                    <span>Route Name <p>*</p></span>
                                    <input type="text" />
                                </div>
                                <div className="select_box">
                                    <span>Assign Vehicle <p>*</p></span>
                                    <div className="dropdown_sec">
                                        <div className="dropdown_btn" onClick={handleVehicleDropdown}>
                                            <p>{selectedVehicle ? `${selectedVehicle.name} (${selectedVehicle.number})` : ''}</p>
                                            <i className={`fa-solid fa-angle-down ${showVehicleDropdown ? 'active' : ''}`}></i>
                                        </div>
                                        <div className={`dropdown ${showVehicleDropdown ? 'active' : ''}`}>
                                            <div className="dropdown_inner">
                                                <ul>
                                                    {
                                                        isVehiclesLoading ? (
                                                            Array.from({ length: 2 }).map((_, index) => (
                                                                <li><SkeletonLoader width="100%" height="13px" /></li>
                                                            ))
                                                        ) : vehicleList.length > 0 ? (
                                                            vehicleList.map((vehicle, i) =>
                                                                <li className={`vehicle_item ${selectedVehicle?.id === vehicle.id ? 'active' : ''}`} key={i} onClick={() => handleSelectVehicle(vehicle)}>
                                                                    {vehicle.name} <p>[ {vehicle.number} - {vehicle.type} | Seats: {vehicle.capacity} ]</p>
                                                                </li>
                                                            )
                                                        ) : (
                                                            <li className="empty_message">No vehicles available</li>
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="select_box">
                                    <span>Assign Staff <p>*</p></span>
                                    <div className="dropdown_sec">
                                        <div className="dropdown_btn" onClick={handleStaffDropdown}>
                                            <p>{getStaffDisplayLabel()}</p>
                                            <i className={`fa-solid fa-angle-down ${showStaffDropdown ? 'active' : ''}`}></i>
                                        </div>
                                        <div className={`dropdown staff_dropdown ${showStaffDropdown ? 'active' : ''}`}>
                                            <div className="dropdown_inner">
                                                {isStaffsLoading ? (
                                                    <ul>
                                                        {Array.from({ length: 2 }).map((_, idx) => (
                                                            <li key={idx}><SkeletonLoader width="100%" height="13px" /></li>
                                                        ))}
                                                    </ul>
                                                ) : staffList.length === 0 ? (
                                                    <ul><li className="empty_message">No staff available</li></ul>
                                                ) : (
                                                    <div className="staff_groups">
                                                        {staffList.map((group) => (
                                                            <div className="staff_group" key={group.role}>
                                                                <div className="group_header" onClick={() => toggleStaffGroup(group.role)}>
                                                                    <b>{group.role}</b>
                                                                    <i className={`fa-solid fa-angle-down ${openStaffGroups[group.role] ? 'open' : ''}`}></i>
                                                                </div>
                                                                <div className={`group_list ${openStaffGroups[group.role] ? 'open' : ''}`}>
                                                                    <ul>
                                                                        {group.staffs.length === 0 ? (
                                                                            <li className="empty_message">No staff in this role</li>
                                                                        ) : (
                                                                            group.staffs.map((staff) => {
                                                                                const isSelected = selectedStaffs.some((s) => s.id === staff.id);
                                                                                return (
                                                                                    <li
                                                                                        key={staff.id}
                                                                                        className={isSelected ? 'selected' : ''}
                                                                                        onClick={() => toggleStaffSelection(staff)}
                                                                                    >
                                                                                        <span className={`check_icon ${isSelected ? 'checked' : ''}`}>
                                                                                            {isSelected && <i className="fa-solid fa-check"></i>}
                                                                                        </span>
                                                                                        {staff.name}
                                                                                    </li>
                                                                                );
                                                                            })
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="date_box">
                                    <span>School Start Time <p>*</p></span>
                                    <div className="date_btn">
                                        <p>Set Time</p>
                                        <i className="fa-regular fa-clock"></i>
                                    </div>
                                </div>
                                <div className="date_box">
                                    <span>School End Time <p>*</p></span>
                                    <div className="date_btn">
                                        <p>Set Time</p>
                                        <i className="fa-regular fa-clock"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="stopage_sections">
                                <div className="sec_head">
                                    <h6>Add Stopage</h6>
                                </div>
                                <div className="sec_content">
                                    {stopages.map((stopage, index) => {
                                        const canDragStopages = stopages.length > 1;
                                        const selectedElsewhereIds = new Set(
                                            Object.entries(selectedStopagesByBox)
                                                .filter(([boxId]) => String(boxId) !== String(stopage.id))
                                                .map(([, val]) => val?.id)
                                                .filter(Boolean)
                                        );
                                        const availableStopages = stopageList.filter(
                                            (item) => !selectedElsewhereIds.has(item.id)
                                        );
                                        return (
                                            <div
                                                className={`content_box ${draggingStopageId === stopage.id ? 'dragging' : ''} ${openStopageDropdownId === stopage.id ? 'dropdown_open' : ''}`}
                                                key={stopage.id}
                                                ref={(el) => { stopageCardRefs.current[stopage.id] = el; }}
                                                onDragOver={(event) => event.preventDefault()}
                                                onDrop={() => {
                                                    if (draggingStopageId != null) {
                                                        reorderStopages(draggingStopageId, stopage.id);
                                                    }
                                                    setDraggingStopageId(null);
                                                }}
                                            >
                                                {canDragStopages && (
                                                    <div className="box_drag">
                                                        <span
                                                            className="drag_handle"
                                                            draggable
                                                            onDragStart={() => setDraggingStopageId(stopage.id)}
                                                            onDragEnd={() => setDraggingStopageId(null)}
                                                            title="Drag to reorder"
                                                        >
                                                            <i className="fa-solid fa-grip-vertical"></i>
                                                        </span>
                                                    </div>
                                                )}
                                                <div className={`box_content ${canDragStopages ? '' : 'no_drag'}`}>
                                                    <div className="box_head">
                                                        <a>{`Stopage ${index + 1}`}</a>
                                                        {stopages.indexOf(stopage) !== 0 && (
                                                            <span className="delete_btn" onClick={() => handleDeleteStopage(stopage.id)}>
                                                                <i className="fa-solid fa-trash-can"></i>
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="box_items">
                                                        <div className="select_box">
                                                            <span>Select Stopage <p>*</p></span>
                                                            <div className="dropdown_sec">
                                                                <div
                                                                    className="dropdown_btn"
                                                                    ref={(el) => { stopageBtnRefs.current[stopage.id] = el; }}
                                                                    onClick={() => handleStopageDropdown(stopage.id)}
                                                                >
                                                                    <p>{selectedStopagesByBox[stopage.id]?.name || ''}</p>
                                                                    <i className={`fa-solid fa-angle-down ${openStopageDropdownId === stopage.id ? 'active' : ''}`}></i>
                                                                </div>
                                                                <div className={`dropdown ${openStopageDropdownId === stopage.id ? 'active' : ''} ${isDropUpMap[stopage.id] ? 'drop_up' : ''}`}>
                                                                    <div className="dropdown_inner">
                                                                        <ul>
                                                                            {
                                                                                isStopagesLoading ? (
                                                                                    Array.from({ length: 2 }).map((_, index) => (
                                                                                        <li key={index}><SkeletonLoader width="100%" height="13px" /></li>
                                                                                    ))
                                                                                ) : availableStopages.length > 0 ? (
                                                                                    availableStopages.map((item, index) => {
                                                                                        const optionKey = item.id || item._id || `${item.name || "stopage"}-${index}`;
                                                                                        const isSelected = selectedStopagesByBox[stopage.id]?.id === item.id;

                                                                                        return (
                                                                                            <li
                                                                                                key={optionKey}
                                                                                                className={isSelected ? 'active' : ''}
                                                                                                onClick={() => handleSelectStopageForBox(stopage.id, item)}
                                                                                            >
                                                                                                {item.name}
                                                                                            </li>
                                                                                        );
                                                                                    })
                                                                                ) : (
                                                                                    <li className="empty_message">No stopages available</li>
                                                                                )
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="date_box">
                                                            <span>Pick up Time <p>*</p></span>
                                                            <div className="date_btn">
                                                                <p>Set Time</p>
                                                                <i className="fa-regular fa-clock"></i>
                                                            </div>
                                                        </div>
                                                        <div className="date_box">
                                                            <span>Drop Time <p>*</p></span>
                                                            <div className="date_btn">
                                                                <p>Set Time</p>
                                                                <i className="fa-regular fa-clock"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    {canAddMoreStopages && (
                                        <div className="add_sec" onClick={handleAddStopage} style={{ cursor: "pointer" }}>
                                            <span><i className="fa-solid fa-plus"></i>Add more</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right_items">
                        <div className="item_inner">
                            {loadError ? (
                                <div style={{ padding: '15px', fontSize: '12px', color: '#888' }}>Map failed to load.</div>
                            ) : !isMapLoaded ? (
                                <div style={{ padding: '15px', fontSize: '12px', color: '#888' }}>Loading map...</div>
                            ) : (
                                <GoogleMap
                                    mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '6px' }}
                                    center={instCenter}
                                    zoom={14}
                                    options={{ disableDefaultUI: true, zoomControl: true }}
                                    onLoad={(map) => {
                                        mapRef.current = map;
                                    }}
                                    onUnmount={() => {
                                        mapRef.current = null;
                                    }}
                                >
                                    <Marker
                                        position={instCenter}
                                        title={userDetails?.institution?.inst_name || 'Institution'}
                                        icon={{
                                            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
                                                '<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">' +
                                                '<circle cx="22" cy="22" r="21" fill="#1DA1F2" stroke="white" stroke-width="2.5"/>' +
                                                '<text x="22" y="29" text-anchor="middle" font-size="22" font-family="serif">🏫</text>' +
                                                '</svg>'
                                            ),
                                            scaledSize: new window.google.maps.Size(44, 44),
                                            anchor: new window.google.maps.Point(22, 22)
                                        }}
                                    />
                                    {selectedStopageMarkers.map((stopage) => (
                                        <Marker
                                            key={`stopage-marker-${stopage.id}`}
                                            position={{ lat: stopage.lat, lng: stopage.lng }}
                                            title={stopage.name}
                                            icon={{
                                                url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
                                                    '<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">' +
                                                    '<circle cx="19" cy="19" r="18" fill="#22C55E" stroke="white" stroke-width="2"/>' +
                                                    '<text x="19" y="24" text-anchor="middle" font-size="16" font-family="serif">🚏</text>' +
                                                    '</svg>'
                                                ),
                                                scaledSize: new window.google.maps.Size(38, 38),
                                                anchor: new window.google.maps.Point(19, 19)
                                            }}
                                        />
                                    ))}
                                    {directionsResult && (
                                        <DirectionsRenderer
                                            directions={directionsResult}
                                            options={{
                                                suppressMarkers: true,
                                                polylineOptions: {
                                                    strokeColor: '#F59E0B',
                                                    strokeOpacity: 1,
                                                    strokeWeight: 5
                                                }
                                            }}
                                        />
                                    )}
                                </GoogleMap>
                            )}
                        </div>
                    </div>
                </div>
            </AddRoutesWrapper>
        </>
    );
}

export default AddRoutesPage;