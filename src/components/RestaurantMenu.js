import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    
    useEffect(() => {
        getRestaurantsInfo();
    }, []);

    async function getRestaurantsInfo(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        console.log(json?.data?.cards[2]?.card?.card?.info);
        setRestaurant(json?.data?.cards[2]?.card?.card?.info || "");
    }

  return restaurant === null ? <MenuShimmer/> : (
    <div>
        <h1>Restaurant id : {resId}</h1>
        <h2>Restaurant Name : {restaurant.name}</h2>
        <h3>Area :{restaurant.locality}, {restaurant.areaName} </h3>
    </div>
  )
}

export default RestaurantMenu;
