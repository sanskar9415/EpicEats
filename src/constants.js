export const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const DEFAULT_FOOD_IMAGE_URL = 'https://play-lh.googleusercontent.com/JA0qswBq-iSo5HbTZyyqAEYEdQ-9JjmkNqxyCqAndO8JzHwKnRSzcGrKdhrshDxw4w=w480-h960-rw'
export const apiActions = {
    FETCH_DATA: "fetchData",
    SET_DATA: "setData",
    SET_ERROR: "setError"
}

export const DEBOUNCE_DELAYS = {
    SEARCH_INPUT: 500,   // 500ms for search input
    WINDOW_RESIZE: 300,  // 300ms for window resize events
    TYPEAHEAD: 250       // 250ms for typeahead suggestions
};
export const LOCATION_SUGGESTION_API_END_POINT = `https://www.swiggy.com/dapi/misc/place-autocomplete?input=`
export const ADDRESS_RECOMMEND_API_END_POINT = `https://www.swiggy.com/dapi/misc/address-recommend?place_id=`
export const SWIGGY_RESTAURANT_API_END_POINT = `https://www.swiggy.com/dapi/restaurants/list/v5?is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
export const DEFAULT_LAT_LANG  = '&lat=28.61450&lng=77.30630'
