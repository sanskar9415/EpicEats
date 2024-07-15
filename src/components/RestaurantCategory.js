import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export const RestaurantCategory = ({data}) => {
  return (
    <div className=' bg-gray-100 w-6/12 mx-auto my-4 shadow-md flex justify-between p-4'>
        <span className='mt-1'>{data.title} - ({data.itemCards.length})</span>
        <span>
        <FontAwesomeIcon icon={faChevronDown} className='text-gray-600 mt-2' />
        </span>
        </div>
  )
}

export default RestaurantCategory;
