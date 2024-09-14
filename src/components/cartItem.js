
import { useDispatch, useSelector } from "react-redux"
import "../styles/cart-item.css"
import { IMG_CDN_URL, DEFAULT_FOOD_IMAGE_URL } from "../constants"
import { decreaseQuantity, increaseQuantity } from '../utils/cartSlice'

const CartItem = ({ detail }) => {
    console.log(detail?.card);
    const { id : itemId, name, imageId, price, defaultPrice } = detail
    const dispatch = useDispatch()
    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity(itemId))
    }
    const currentItem = useSelector(store => store.cart.items.find(({ id }) => id === itemId))
    const handleDecreaseQuantity = () => { 
        dispatch(decreaseQuantity(itemId))
    }
    return (
        <div className="cart-item" key={itemId}>
            <img className="cart-item-image" src={ imageId ? `${IMG_CDN_URL}${imageId}` : DEFAULT_FOOD_IMAGE_URL} alt="Item Image" />
            <div className="cart-item-details">
                <h3 className="cart-item-title">{name}</h3>
                <div className="cart-item-price">₹ {(price || defaultPrice) / 100}</div>
            </div>
            <div className="cart-item-quantity">
                <span className="symbol" onClick={handleDecreaseQuantity}>-</span>
                <span className="quantity-number">{currentItem.quantity || 1}</span>
                <span className="symbol" onClick={handleIncreaseQuantity}>+</span>
            </div>
        </div>
    )
}
export default CartItem