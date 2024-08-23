import { Link } from 'react-router-dom';
import { faHouse, faCartShopping, faPhone, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.png'

const Title = () => (
  <div className='p-5 ml-4'>
  <a href="/">
    <img 
      className='h-10 w-auto' // Adjust the height to 80px and allow the width to scale proportionally
      alt="logo"
      src={logo} 
    />
  </a>
</div>
  );



const Header = function (){
    return (
      <div className='flex justify-between shadow-lg  p-1 bg-gray-200 sticky top-0 z-40'>
        <Title/>
        <div className="nav-items">
          <ul className='flex py-3 pr-6 '>
            <li><Link className='link mx-3 text-2xl' to = "/"><FontAwesomeIcon icon={faHouse} /></Link></li>
            <li><Link className='link mx-3 text-2xl' to = "/about"><FontAwesomeIcon icon={faAddressCard} /></Link></li>
            <li><Link className='link mx-3 text-2xl' to = "/contact"><FontAwesomeIcon icon={faPhone} /></Link></li>
            <li><Link className='link mx-3 text-2xl' to = "/"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;


  