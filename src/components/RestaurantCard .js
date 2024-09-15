import { IMG_CDN_URL } from '../constants'

import GreenStarSvg from "../assets/GreenStarSvg";
const RestaurantCard = ({ name,areaName, cloudinaryImageId, costForTwo, cuisines, avgRating, sla}) => {
     return (
      <div className="card">
            <img src={ IMG_CDN_URL + cloudinaryImageId} alt="Food item" className="card-image" />
            <div className="card-content">
               <h2 className="card-title">{name} <span className='text-xs'>({areaName})</span></h2>
               {/* <h2 className='text-sm card-subtitle p-0'>{areaName}</h2> */}
               <div className="card-rating-cost-for-two">
                  {(avgRating != undefined)? <span className="star-rating">
                     <GreenStarSvg />
                     {`${avgRating}`}
                  </span> : ''}
                  <span>{costForTwo}</span>
               </div>
               <p className="card-subtitle">{sla.deliveryTime} mins</p>
               <p className="card-subtitle">{cuisines?.join(", ")}</p>
            </div>
      </div>
   );
}
export default RestaurantCard