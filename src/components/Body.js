// import restaurantList from "../../dummy_data";
import RestaurantCard from "./RestaurantCard ";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { DEFAULT_LAT_LANG, SWIGGY_RESTAURANT_API_END_POINT } from "../constants";
import { useSelector } from "react-redux";
import React from 'react';


function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const RAILWAY_CORS_PROXY = 'https://web-production-28626.up.railway.app';
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
  <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50">
    <div className="relative flex items-center w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
        className="
          pl-10
          pr-4
          py-2
          w-full
          text-sm
          text-gray-900
          bg-gray-50
          border-none
          rounded-l-lg
          focus:ring-blue-500
          focus:border-blue-500
          focus:outline-none
        "
        placeholder="Search Restaurants..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>

    <button
      type="submit"
      className="
        px-4
        py-2
        text-sm
        font-medium
        text-white
        bg-blue-700
        hover:bg-blue-800
        focus:ring-4
        focus:outline-none
        focus:ring-blue-300
        rounded-r-lg
      "
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
