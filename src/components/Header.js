import { Link } from 'react-router-dom';
import { faHouse, faCartShopping, faPhone, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../utils/cartSlice';
import { toggleLocation } from '../utils/locationSlice';
import "../styles/location.css"
import { faArrowCircleDown, faArrowDown, faCartShopping, faContactBook, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';


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



  const Header = function () {
    const dispatch = useDispatch();
  
    const cartItems = useSelector((state) => state.cart.items);
    const address = useSelector(store => store.location.address);
  
    console.log(cartItems);
  
    const handleToggleCart = () => {
      dispatch(toggleCart());
    };
  
    return (
      <div className='flex justify-between items-center shadow-lg p-1 bg-gray-200 sticky top-0 z-40'>
        <div className='flex items-center'>
          <Title />
          <div className='location ml-4 cursor-pointer ' onClick={() => dispatch(toggleLocation())}>
            <span className='mr-3 border-b-2 border-orange-500'>{address?.formatted_address}</span>
            <FontAwesomeIcon className = "text-orange-600"icon={faArrowDown} />
          </div>
        </div>
        <div className="nav-items">
          <ul className='flex py-3 pr-6'>
            <li><Link className='link mx-3 text-2xl' to="/"><FontAwesomeIcon icon={faHouse} /></Link></li>
            <li><Link className='link mx-3 text-2xl' to="/about"><FontAwesomeIcon icon={faAddressCard} /></Link></li>
            <li><Link className='link mx-3 text-2xl' to="/contact"><FontAwesomeIcon icon={faPhone} /></Link></li>
            <li>
              <div className='link mx-3 text-2xl cart-icon' onClick={handleToggleCart}>
                <FontAwesomeIcon icon={faCartShopping} />
                <div className="cart-items-count">{cartItems.length}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;
  


  