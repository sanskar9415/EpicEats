import { IMG_CDN_URL } from '../constants'

import GreenStarSvg from "../assets/GreenStarSvg";
const RestaurantCard = ({ name, cloudinaryImageId, costForTwo, cuisines, avgRating, deliveryTime}) => {
     return (
      <div className="card">
            <img src={ IMG_CDN_URL + cloudinaryImageId} alt="Food item" className="card-image" />
            <div className="card-content">
               <h2 className="card-title">{name}</h2>
               <div className="card-rating-cost-for-two">
                  <span className="star-rating">
                     <GreenStarSvg />
                     {`${avgRating}`}
                  </span>
                  <span>{costForTwo}</span>
               </div>
               <p className="card-subtitle">{30} mins</p>
               <p className="card-subtitle">{cuisines?.join(", ")}</p>
            </div>
      </div>
   );
}
export default RestaurantCard