import { useEffect, useRef, useState } from "react";
import { SelectAddressWrapper } from "../../../Styles/SettingModalStyle";
import states from "../../../Data/States.json";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import { GoogleMap, LoadScript, Marker, Autocomplete, Circle } from "@react-google-maps/api";

const SelectAddressModal = ({ isShowAddressModal, setIsShowAddressModal }) => {
    const api = getApiEndpoints();
    const [stateDropdownShow, setStateDropdownShow] = useState(false);
    const [selectedState, setSelectedState] = useState('');
    const [cityDropdownShow, setCityDropdownShow] = useState(false);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    const defaultCenter = { lat: 20.5937, lng: 78.9629 };

    const [mapCenter, setMapCenter] = useState(defaultCenter);
    const [markerPosition, setMarkerPosition] = useState(defaultCenter);
    const [highlightCenter, setHighlightCenter] = useState(null);

    const [zoomLevel, setZoomLevel] = useState(5);

    const [autocomplete, setAutocomplete] = useState(null);
    const [searchBounds, setSearchBounds] = useState(null);

    const [address, setAddress] = useState("");

    const isSearchEnabled = selectedState && selectedCity;

    function closeModal() {
        setIsShowAddressModal(false);
    }

    const toggleStateDropdown = () => {
        setStateDropdownShow(!stateDropdownShow);
        setCityDropdownShow(false);
    }

    const geocodeLocation = async (address) => {
        try {
            const geocoder = new window.google.maps.Geocoder();
            const result = await new Promise((resolve, reject) => {
                geocoder.geocode({ address }, (results, status) => {
                    if (status === "OK") resolve(results[0]);
                    else reject(status);
                });
            });

            const location = result.geometry.location;
            const bounds = result.geometry.viewport;

            return {
                lat: location.lat(),
                lng: location.lng(),
                bounds
            };
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    const reverseGeocode = async (lat, lng) => {
        try {
            const geocoder = new window.google.maps.Geocoder();

            const result = await new Promise((resolve, reject) => {
                geocoder.geocode(
                    { location: { lat, lng } },
                    (results, status) => {
                        if (status === "OK") resolve(results[0]);
                        else reject(status);
                    }
                );
            });

            return result.formatted_address;
        } catch (error) {
            console.error("Reverse geocode error:", error);
            return "";
        }
    };

    const handleSelectState = async (state) => {
        if (state === selectedState) return;

        setSelectedState(state);
        setSelectedCity('');
        setStateDropdownShow(false);
        setSearchBounds(null);

        const coords = await geocodeLocation(`${state}, India`);

        if (coords) {
            setMapCenter(coords);
            setMarkerPosition(coords);
            setHighlightCenter(coords);
            setZoomLevel(7);
        }
    }

    const fetchCities = async () => {
        try {
            const response = await axiosInstance.get(api.fetchCitiesStatewise, {
                params: { name: selectedState }
            });
            if (response?.data.status === 200) {
                setCities(response?.data.cities);
                console.log("City", response.data);
            }
        } catch (error) {
            setCities([]);
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (selectedState) {
            fetchCities();
        }
    }, [selectedState]);

    const toggleCityDropdown = () => {
        setCityDropdownShow(!cityDropdownShow);
        setStateDropdownShow(false);
    }

    const handleSelectCity = async (city) => {
        if (city === selectedCity) return;
        setSelectedCity(city);
        setCityDropdownShow(false);

        const coords = await geocodeLocation(`${city}, ${selectedState}, India`);

        if (coords) {
            setMapCenter(coords);
            setMarkerPosition(coords);
            setHighlightCenter(coords);
            setZoomLevel(12);
            setSearchBounds(coords.bounds);
        }
    }

    const onPlaceChanged = () => {
        if (!autocomplete) return;
        const place = autocomplete.getPlace();

        if (place.geometry) {
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();

            const coords = { lat, lng };

            setMapCenter(coords);
            setMarkerPosition(coords);
            setHighlightCenter(coords);
            setZoomLevel(15);
            setAddress(place.formatted_address || "");
        }
    };

    return (
        <>
            <SelectAddressWrapper className={isShowAddressModal ? 'active' : ''}>
                <div className={`modal_box ${isShowAddressModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Select Address form Google Map</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="country_name_sec">
                                <p>Country : <span>India</span></p>
                            </div>
                            <div className="select_box">
                                <span>Select State <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleStateDropdown}>
                                        <p>{selectedState}</p>
                                        <i className={`fa-solid fa-angle-down ${stateDropdownShow ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${stateDropdownShow ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    states && states.length > 0 ? (
                                                        states.map((state, i) =>
                                                            <li
                                                                key={i}
                                                                onClick={() => handleSelectState(state.name)}
                                                                className={state.name === selectedState ? 'active' : ''}
                                                            >
                                                                {state.name}
                                                            </li>
                                                        )
                                                    ) : (
                                                        <li className="empty_message">No state found</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box">
                                <span>Select City <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleCityDropdown}>
                                        <p>{selectedCity}</p>
                                        <i className={`fa-solid fa-angle-down ${cityDropdownShow ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${cityDropdownShow ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    cities.length > 0 ? (
                                                        cities.map((city, i) =>
                                                            <li
                                                                key={i}
                                                                onClick={() => handleSelectCity(city.name)}
                                                                className={city.name === selectedCity ? 'active' : ''}
                                                            >
                                                                {city.name}
                                                            </li>
                                                        )
                                                    ) : (
                                                        <li className="empty_message">No cities available</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <LoadScript
                                googleMapsApiKey="AIzaSyDKX4TjlGMne-DIIucVFT6FRmTiMXKkcqs"
                                libraries={["places"]}
                            >
                                <div className="search_sec_box">
                                    <div className="search_sec">
                                        <i className="fa-solid fa-magnifying-glass"></i>

                                        <Autocomplete
                                            onLoad={(auto) => setAutocomplete(auto)}
                                            onPlaceChanged={onPlaceChanged}
                                            options={{
                                                bounds: searchBounds || undefined,
                                                strictBounds: true,
                                                componentRestrictions: { country: "in" }
                                            }}
                                        >
                                            <input
                                                type="text"
                                                placeholder={
                                                    isSearchEnabled
                                                        ? "Search location..."
                                                        : "Select state & city first"
                                                }
                                                disabled={!isSearchEnabled}
                                                style={{
                                                    opacity: isSearchEnabled ? 1 : 0.5
                                                }}
                                            />
                                        </Autocomplete>

                                    </div>
                                </div>
                                <div className="map_box">
                                    <GoogleMap
                                        mapContainerStyle={{ width: "100%", height: "100%" }}
                                        center={highlightCenter || mapCenter}
                                        zoom={zoomLevel}
                                        onClick={(e) => {
                                            const coords = {
                                                lat: e.latLng.lat(),
                                                lng: e.latLng.lng()
                                            };

                                            setMarkerPosition(coords);
                                            setMapCenter(coords);
                                            setHighlightCenter(coords);
                                        }}
                                    >
                                        <Marker
                                            position={markerPosition}
                                            draggable={true}
                                            onDragEnd={async (e) => {
                                                const lat = e.latLng.lat();
                                                const lng = e.latLng.lng();

                                                const coords = { lat, lng };

                                                setMarkerPosition(coords);
                                                setMapCenter(coords);
                                                setHighlightCenter(coords);

                                                const address = await reverseGeocode(lat, lng);
                                                if (address) {
                                                    setAddress(address);
                                                }
                                            }}
                                        />

                                        {highlightCenter && (
                                            <Circle
                                                center={highlightCenter}
                                                radius={100000}
                                                options={{
                                                    fillColor: "#1DA1F2",
                                                    fillOpacity: 0.2,
                                                    strokeColor: "#1DA1F2"
                                                }}
                                            />
                                        )}
                                    </GoogleMap>
                                </div>
                            </LoadScript>
                            <div className="text_box">
                                <span>Location <p>*</p></span>
                                <textarea value={address} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </SelectAddressWrapper>
        </>
    );
}

export default SelectAddressModal;