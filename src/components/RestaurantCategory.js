import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import ItemList from './ItemList';

export const RestaurantCategory = ({data, showItems, setShowIndex}) => {

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div  className=' bg-gray-100 w-6/12 mx-auto my-4 shadow-md'>
    <div className='flex justify-between p-4 cursor-pointer' onClick={handleClick}>
        <span className='mt-1 font-bold'>{data.title}  ({data.itemCards.length})
        </span>
        <span>
        <FontAwesomeIcon icon={faChevronDown} className='text-gray-600 mt-2' />
        </span>
    </div>
    {showItems && <ItemList items = {data.itemCards}/>}
    </div>
  )
}

export default RestaurantCategory;
