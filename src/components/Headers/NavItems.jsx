import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavItemsComponent = () => {


  const [btnName, setBtnName] = useState("Login");
  const handleClick = () => {
    if(btnName === "Login") {
      setBtnName("Logout");
    } else {
      setBtnName("Login");
    }
  };

      // called every time when AppLayout is rendered
   
  useEffect(() => {
  });

// called just once when Nav component is mounted
  useEffect(() => {
  }, []);
// called every time dependency is changed when Nav component is mounted, whenever bTName is changed
  useEffect(() => {
  }, [btnName]);

  return (
    <div className="nav-items">
      <ul>
        <li> <Link to="/"> Home</Link></li>
        {/* <li> <a href="/about-us">About Us</a></li> never use a because it will render whole header   */}
        <li> <Link to="/about-us">About Us </Link></li> 
        <li> Company </li>
        <li style={{textDecoration:'none', color:"inherit"}}> <Link to="/contact-us">Contact Us </Link></li>
        <li> Cart </li>
        <li className="login-button" onClick={handleClick}> {btnName} </li>
        {/* <Login /> */}
      </ul>
    </div>
  );
};


export default NavItemsComponent;