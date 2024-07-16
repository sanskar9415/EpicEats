import React from 'react'

export const ItemList = ({items}) => {
    console.log(items);
  return (
    <div>
        {items.map((item) => (
            <div key = {item?.card?.info?.id}>{item?.card?.info.name}</div>
        ))}
    </div>
  )
}

export default ItemList;
