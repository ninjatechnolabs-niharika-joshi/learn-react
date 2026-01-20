import LogoComponent from "./Logo";
import NavItemsComponent from "./NavItems";

const HeaderComponent = () => {
  return (
    // <div className="whole-header">
    <div className="header">
      <LogoComponent />
      <NavItemsComponent />
    </div>
    
  );
};


export default HeaderComponent;