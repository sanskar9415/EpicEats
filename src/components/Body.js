import restaurantList from '../../dummy_data';
import RestaurantCard from './RestaurantCard ';
import { useState, useEffect } from "react";
import { Shimmer } from './Shimmer';
import { Link } from "react-router-dom";


function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {

  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, [])


  async function getRestaurants() {
    console.log("hii");
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6749206&lng=77.1794302&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
      setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle);

    } catch (error) {
      console.error("Failed to fetch restaurants", error);
    }
  }
    if(!allRestaurants) return null;
    return (allRestaurants.length === 0 ) ? <Shimmer/> :
    (
      <>
      <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search a restaurant you want..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button
        className="search-btn"
        onClick={() => {
          const data = filterData(searchText, allRestaurants);
          setFilteredRestaurants(data);
        }}
      >
        Search
      </button>
    </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return <Link to = {"restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <RestaurantCard  {...restaurant.info} />
            </Link>
        })}
      </div>
      </>
    );
  };

  export default Body;