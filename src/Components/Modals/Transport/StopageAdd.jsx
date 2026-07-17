import { useEffect, useRef, useState } from "react";
import { StopageAddWrapper } from "../../../Styles/Modals/TransportModalsStyle";
import { AddStateCitiesWrapper } from "../../../Styles/SettingModalStyle";
import { toast } from "react-toastify";
import states from "../../../Data/States.json";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import { Autocomplete, Circle, GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { UserData } from "../../../Context/PageContext";

const StopageAddModal = ({ isStopageAdd, setIsStopageAdd }) => {
    const api = getApiEndpoints();
    const { userDetails } = UserData();
    const [stateDropdownShow, setStateDropdownShow] = useState(false);
    const [selectedState, setSelectedState] = useState('');
    const [cityDropdownShow, setCityDropdownShow] = useState(false);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [searchInput, setSearchInput] = useState('');

    const defaultCenter = { lat: 20.5937, lng: 78.9629 };

    const [mapCenter, setMapCenter] = useState(defaultCenter);
    const [markerPosition, setMarkerPosition] = useState(defaultCenter);
    const [highlightCenter, setHighlightCenter] = useState(null);

    const [zoomLevel, setZoomLevel] = useState(5);

    const [autocomplete, setAutocomplete] = useState(null);
    const [searchBounds, setSearchBounds] = useState(null);

    const [address, setAddress] = useState("");
    const [stopageName, setStopageName] = useState("");
    const [distance, setDistance] = useState("");
    const [hasLocationSelection, setHasLocationSelection] = useState(false);

    const isSearchEnabled = selectedState && selectedCity;
    const isFormComplete =
        Boolean(selectedState?.trim()) &&
        Boolean(selectedCity?.trim()) &&
        Boolean(address?.trim()) &&
        Boolean(stopageName?.trim()) &&
        Boolean(distance?.toString().trim());
    const circleRef = useRef(null);

    function closeModal() {
        circleRef.current = null;
        setSelectedState('');
        setSelectedCity('');
        setCities([]);
        setSearchInput('');
        setMapCenter(defaultCenter);
        setMarkerPosition(defaultCenter);
        setHighlightCenter(null);
        setZoomLevel(5);
        setAutocomplete(null);
        setSearchBounds(null);
        setAddress("");
        setStopageName("");
        setDistance("");
        setHasLocationSelection(false);
        setIsStopageAdd(false);
    }

    const toggleStateDropdown = () => {
        setStateDropdownShow(!stateDropdownShow);
        setCityDropdownShow(false);
    }

    const calculateDistanceInKm = (fromLat, fromLng, toLat, toLng) => {
        if (!fromLat || !fromLng || !toLat || !toLng) return "";

        const toRad = (value) => (value * Math.PI) / 180;
        const earthRadiusKm = 6371;

        const dLat = toRad(toLat - fromLat);
        const dLng = toRad(toLng - fromLng);
        const lat1 = toRad(fromLat);
        const lat2 = toRad(toLat);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = earthRadiusKm * c;

        return Number.isFinite(distance) ? distance.toFixed(2) : "";
    };

    const updateDistance = (coords) => {
        if (!coords) {
            setDistance("");
            return;
        }

        const fromLat = Number(userDetails?.institution?.latitude);
        const fromLng = Number(userDetails?.institution?.longitude);

        if (!Number.isFinite(fromLat) || !Number.isFinite(fromLng)) {
            setDistance("");
            return;
        }

        const computedDistance = calculateDistanceInKm(fromLat, fromLng, coords.lat, coords.lng);
        setDistance(computedDistance);
    };

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
        setAddress("");
        setDistance("");
        setStateDropdownShow(false);
        setSearchBounds(null);

        const coords = await geocodeLocation(`${state}, India`);

        if (coords) {
            setMapCenter(coords);
            setMarkerPosition(coords);
            setHighlightCenter(coords);
            setZoomLevel(7);
            setHasLocationSelection(true);
        }
    }

    const fetchCities = async () => {
        try {
            const response = await axiosInstance.get(api.fetchCitiesStatewise, {
                params: { name: selectedState, search: searchInput }
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
    }, [selectedState, searchInput]);

    const toggleCityDropdown = () => {
        setCityDropdownShow(!cityDropdownShow);
        setStateDropdownShow(false);
    }

    const handleSelectCity = async (city) => {
        if (city === selectedCity) return;
        setSelectedCity(city);
        setAddress("");
        setDistance("");
        setCityDropdownShow(false);

        const coords = await geocodeLocation(`${city}, ${selectedState}, India`);

        if (coords) {
            setMapCenter(coords);
            setMarkerPosition(coords);
            setHighlightCenter(coords);
            setZoomLevel(12);
            setSearchBounds(coords.bounds);
            setHasLocationSelection(true);
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
            setHasLocationSelection(true);
        }
    };

    useEffect(() => {
        if (!hasLocationSelection || !address.trim()) {
            setDistance("");
            return;
        }
        updateDistance(markerPosition);
    }, [hasLocationSelection, address, markerPosition.lat, markerPosition.lng, userDetails?.institution?.latitude, userDetails?.institution?.longitude]);

    return (
        <>
            <StopageAddWrapper className={isStopageAdd ? 'active' : ''}>
                <div className={`modal_box ${isStopageAdd ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Stopage</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="country_name_sec">
                                <p>Country : <span>India</span></p>
                            </div>
                            <div className="state_city_sec">
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
                                                {
                                                    cities.length > 8 &&
                                                    <div className="search_sec">
                                                        <i className="fa-solid fa-magnifying-glass"></i>
                                                        <input
                                                            type="text"
                                                            placeholder="Search by City Name..."
                                                            value={searchInput}
                                                            onChange={(e) => setSearchInput(e.target.value)}
                                                        />
                                                    </div>
                                                }
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
                            </div>
                            <LoadScript
                                googleMapsApiKey="AIzaSyDKX4TjlGMne-DIIucVFT6FRmTiMXKkcqs"
                                libraries={["places"]}
                            >
                                <div className="search_sec_box">
                                    <div className="search_sec">
                                        <i className="fa-solid fa-magnifying-glass"></i>

                                        <Autocomplete
                                            className="input_box"
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
                                        mapContainerStyle={{ width: "100%", height: "100%", borderRadius: "3px" }}
                                        center={highlightCenter || mapCenter}
                                        zoom={zoomLevel}
                                        onClick={async (e) => {
                                            const coords = {
                                                lat: e.latLng.lat(),
                                                lng: e.latLng.lng()
                                            };

                                            setMarkerPosition(coords);
                                            setMapCenter(coords);
                                            setHighlightCenter(coords);
                                            setHasLocationSelection(true);

                                            const resolvedAddress = await reverseGeocode(coords.lat, coords.lng);
                                            setAddress(resolvedAddress || "");
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
                                                setHasLocationSelection(true);

                                                const address = await reverseGeocode(lat, lng);
                                                setAddress(address || "");
                                            }}
                                        />

                                        {highlightCenter && (
                                            <Circle
                                                center={highlightCenter}
                                                radius={zoomLevel >= 10 ? 20000 : 100000}
                                                options={{
                                                    fillColor: "#1DA1F2",
                                                    fillOpacity: 0.2,
                                                    strokeColor: "#1DA1F2"
                                                }}
                                                onLoad={(circle) => {
                                                    if (circleRef.current) {
                                                        circleRef.current.setMap(null);
                                                    }
                                                    circleRef.current = circle;
                                                }}
                                                onUnmount={() => {
                                                    if (circleRef.current) {
                                                        circleRef.current.setMap(null);
                                                        circleRef.current = null;
                                                    }
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
                            <div className="distance_sec">
                                <div className="input_box">
                                    <span>Stopage Name <p>*</p></span>
                                    <input
                                        type="text"
                                        value={stopageName}
                                        onChange={(e) => setStopageName(e.target.value)}
                                    />
                                </div>
                                <div className="input_box">
                                    <span>Distance <p>*</p></span>
                                    <div className="input_wrapper">
                                        <input type="text" value={distance} readOnly placeholder="0" />
                                        <p>Km</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button disabled={!isFormComplete}>Save</button>
                    </div>
                </div>
            </StopageAddWrapper>
        </>
    );
}

export default StopageAddModal;