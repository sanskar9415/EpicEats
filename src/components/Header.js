import { Link } from 'react-router-dom';

const Title = () => (
    <a href="/">
      <img 
    className = 'logo' 
    alt="logo"
    src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" 
    />
    </a>
  );



const Header = function (){
    return (
      <div className='header'>
        <Title/>
        <div className="nav-items">
          <ul>
            <li><Link className='link' to = "/">Home</Link></li>
            <li><Link className='link' to = "/about">About</Link></li>
            <li><Link className='link' to = "/contact">Contact</Link></li>
            <li><Link className='link' to = "/">Cart</Link></li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;


  