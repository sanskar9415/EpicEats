import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { setAddress, toggleLocation } from "../utils/locationSlice"
import { useDispatch } from "react-redux"
import "../styles/location.css"
import { useEffect, useState } from "react"
import { LOCATION_SUGGESTION_API_END_POINT, DEBOUNCE_DELAYS, ADDRESS_RECOMMEND_API_END_POINT } from "../constants"
import { debounce } from "../utils/debounce"
import useFetch from "../hooks/useFetch";

const LocationSearch = () => {
    const dispatch = useDispatch()
    const [autoCompleteUrl, setAutoCompleteUrl] = useState(LOCATION_SUGGESTION_API_END_POINT);
    const [addressRecommendUrl, setAddressRecommendUrl] = useState(ADDRESS_RECOMMEND_API_END_POINT)
    const { data: suggestedPlaces } = useFetch(autoCompleteUrl)
    const { data: recommendedAddress } = useFetch(addressRecommendUrl)
    const [searchTerm, setSearchTerm] = useState('')
    
    const debounceSearchText = debounce(() => {
        setAutoCompleteUrl(`${LOCATION_SUGGESTION_API_END_POINT}${searchTerm}`)
    }, DEBOUNCE_DELAYS.SEARCH_INPUT);
    
    useEffect(() => {
        debounceSearchText();
        return () => debounceSearchText.cancel();
    }, [searchTerm]);
    
    const handleSelectedLocation = async ({ placeId }) => {
        setAddressRecommendUrl(`${ADDRESS_RECOMMEND_API_END_POINT}${placeId}`)
    }
    
    useEffect(() => {
        if (recommendedAddress?.length) {
            dispatch(setAddress(recommendedAddress[0] || {}))
            dispatch(toggleLocation())  // Close after setting the address
        }
    }, [recommendedAddress, dispatch]);
    
    return (
        <div className="location-container">
            <div className="close">
                <FontAwesomeIcon icon={faXmark} onClick={() => {
                    dispatch(toggleLocation())
                }}></FontAwesomeIcon>
            </div>
            <div className="search-box">
                <div className="input-box">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for area, street name.."
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                    />
                </div>
            </div>
            <div className="suggestion-list">
                {(suggestedPlaces || [])?.map(({ place_id: placeId, structured_formatting: { main_text: mainText, secondary_text: address } }) => (
                    <div className="place" key={placeId} onClick={() => handleSelectedLocation({ placeId })}>
                        <div className="title">
                            {mainText}
                        </div>
                        <div className="sub-title">
                            {address}
                        </div>
                    </div>))}
            </div>
        </div>
    )
}

export default LocationSearch;
