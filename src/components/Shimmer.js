import React from 'react'

export const Shimmer = () => {
  return (
        <div className='restaurant-list'>
        {Array(10)
          .fill("")
          .map((e, index) => (
          <div key={index} className='shimmer'>
            </div>
        ))}
        </div>
  )
}
