import React from 'react';
import ReactDOM from 'react-dom/client';

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/


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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  )
}

const Body = () => {
  return (
    <h4>Body</h4>
  )
}
const Footer = () => {
  return <h4>Footer</h4>
}

const AppLayout = () => {
  return (
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
  );
}

  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<AppLayout/>);