import { useEffect, useState } from "react";

const NavItemsComponent = () => {


  const [btnName, setBtnName] = useState("Login");
  const handleClick = () => {
    console.log('Button Clicked!');
    if(btnName === "Login") {
      setBtnName("Logout");
    } else {
      setBtnName("Login");
    }
  };

      // called every time when AppLayout is rendered
   
  useEffect(() => {
    console.log("Nav component useEffect called");
  });

// called just once when Nav component is mounted
  useEffect(() => {
    console.log("Only one time, Nav component useEffect called");
  }, []);
// called every time dependency is changed when Nav component is mounted, whenever bTName is changed
  useEffect(() => {
    console.log("BTN name, Nav component useEffect called");
  }, [btnName]);

  return (
    <div className="nav-items">
      <ul>
        <li> Home</li>
        <li> About Us</li>
        <li> Company </li>
        <li> Cart </li>
        <li className="login-button" onClick={handleClick}> {btnName} </li>
        {/* <Login /> */}
      </ul>
    </div>
  );
};


export default NavItemsComponent;