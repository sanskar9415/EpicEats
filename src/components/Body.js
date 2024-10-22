// import restaurantList from "../../dummy_data";
import RestaurantCard from "./RestaurantCard ";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { DEFAULT_LAT_LANG, SWIGGY_RESTAURANT_API_END_POINT } from "../constants";
import { useSelector } from "react-redux";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const RAILWAY_CORS_PROXY = 'https://web-production-d3380.up.railway.app';
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurantUrl, setRestaurantUrl] = useState(`${RAILWAY_CORS_PROXY}/${SWIGGY_RESTAURANT_API_END_POINT}${DEFAULT_LAT_LANG}`)
  const currentAddress = useSelector((store) => store.location.address);

  useEffect(() => {
    if (currentAddress?.geometry) {
        const { geometry: { location: { lat, lng } } } = currentAddress
        const newUrl = `${RAILWAY_CORS_PROXY}/${SWIGGY_RESTAURANT_API_END_POINT}&lat=${lat}&lng=${lng}`
        setRestaurantUrl(newUrl)
    }
}, [currentAddress])

  useEffect(() => {
    getRestaurants();
  }, [restaurantUrl]);

  async function getRestaurants() {
    console.log("hii");
    try {
      console.log("restaurant url", restaurantUrl)
      const response = await fetch(restaurantUrl);
      console.log(response)
      const json = await response.json();
      setAllRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );  
      // console.log( json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Failed to fetch restaurants", error);
    }
  }
  if (!allRestaurants) return null;
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <form
        className="max-w-md mx-auto mt-4 shadow-md rounded-md sticky top-5 z-50"
        onSubmit={(e) => {
          e.preventDefault();
          const data = filterData(searchText, allRestaurants);
          setFilteredRestaurants(data);
        }}
      >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            placeholder="Search Restaurants...."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>

      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
