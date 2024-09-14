import { Link } from 'react-router-dom';
import { faHouse, faCartShopping, faPhone, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../utils/cartSlice';

const Title = () => (
  <div className='p-5 ml-4'>
  <a href="/">
    <img 
      className='h-10 w-auto'
      alt="logo"
      src={logo} 
    />
  </a>
</div>
  );



const Header = function (){
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  const handleToggleCart = () => {
    dispatch(toggleCart())
}
    return (
      <div className='flex justify-between shadow-lg  p-1 bg-gray-200 sticky top-0 z-40'>
        <Title/>
        <div className="nav-items">
          <ul className='flex py-3 pr-6 '>
            <li><Link className='link mx-3 text-2xl' to = "/"><FontAwesomeIcon icon={faHouse} /></Link></li>
            <li><Link className='link mx-3 text-2xl' to = "/about"><FontAwesomeIcon icon={faAddressCard} /></Link></li>
            <li><Link className='link mx-3 text-2xl' to = "/contact"><FontAwesomeIcon icon={faPhone} /></Link></li>
            <li><div className='link mx-3 text-2xl cart-icon' onClick={handleToggleCart}>
            <FontAwesomeIcon icon={faCartShopping} />
            <div className="cart-items-count">{cartItems.length}</div>
            </div></li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;


  