import React from 'react'
import { IMG_CDN_URL } from '../constants';
import nonVeg from '../assets/nonVeg.png'
import veg from '../assets/veg.png'
import e from '../assets/e.png'

export const ItemList = ({items}) => {
    console.log(items);
  return (
    <div>
        {items.map((item) => (
            <div key = {item?.card?.info?.id} className='p-2 m-2 border-b-2 text-left flex justify-between'>
                <div className='w-9/12 p-2'>
                <div className='py-2'>
                    <div>{item?.card?.info?.itemAttribute?.vegClassifier == 'VEG' ? 
                     (<img src={veg} alt="veg" className="w-6 h-6" />): 
                    (<img src={nonVeg} alt="Non-Veg" className="w-6 h-6" />)}
                    </div>
                    <div className='font-bold text-gray-600 '>{item?.card?.info.name}</div>
                    <div className='font-bold p-1'> ₹ {item?.card?.info.price/100 || item?.card?.info?.defaultPrice/100}</div>
                </div>
                <p className='text-xs'>{item?.card?.info.description}</p>
                </div>
                <div className='w-3/12  items-center'>
                {item?.card?.info.imageId ? (
              <img
                className='rounded-3xl object-cover w-full h-36'
                src={IMG_CDN_URL + item?.card?.info.imageId}
                alt=""
              />
            ) : (
              <img
                className='rounded-3xl object-cover w-full h-36'
                src={e} 
                alt=""
              />
            )}
                </div>
            </div>
        ))}
    </div>
  )
}

export default ItemList;
