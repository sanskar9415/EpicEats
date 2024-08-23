import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    
    useEffect(() => {
        getRestaurantsInfo();
    }, []);

    async function getRestaurantsInfo(){
        const data = await fetch(`https://epiceats-psmn.onrender.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        // setRestaurant(json?.data?.cards[2]?.card?.card?.info);
        // console.log(json?.data?.cards[2].card.card.info);
        setRestaurant(json);
    }
    if(restaurant === null) return <MenuShimmer/>;

    const {name, cuisines} = restaurant?.data?.cards[2]?.card?.card?.info;

    const categories = restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => 
       c?.card?.card?.["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );
    // console.log(categories);

  return  (
    <div className="text-center mt-8">
        <h1 className="font-bold text-2xl mb-1">{name}</h1>
        <h3 className="text-gray-700"> {cuisines.join(", ")}</h3>
        {categories.map((category) => {
          return <RestaurantCategory key = {category?.card?.card?.title} data = {category?.card?.card}/>
          //we can use () for implicit return
        })}


    </div>
  )
}

export default RestaurantMenu;
