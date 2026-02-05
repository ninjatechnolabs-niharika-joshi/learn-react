import { createRoot } from "react-dom/client"

const logoImage = new URL("../../foodapp.jpg", import.meta.url)
const burgerImage = new URL("../../burger.jpg", import.meta.url)

import restaurants from "../../utils/restaurants"

/**
 * 
 * Header Components Contains Logo and Nav Items 
 */

const  LogoComponent = () =>{
    return (
        <div className = "logoComponent">
            <img className="logo" src={logoImage}>
            </img>
        </div>
    )
}

const NavItemsComponent  = () =>{
    return (
        <div className="nav-item">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    )
} 

const Header = () =>{
    return (
        <div className="headerComponent">
            <LogoComponent/>
            <NavItemsComponent/>
        </div>
    )
}

/**
 * Body component contains Search component and Restro Card Container
 * Restro Card Container contains multiple restro cards
 * Restro cards contains logo, restro name, rating, cusinines, time
 * 
 */


const Search = () =>{
    return (
        <div className="searchComponent">
            <p>Search for ex: Burger</p>
        </div>
    )
}

const RestoCardImg = (img) => {
      const image = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${img.cloudinaryImageId}`;
    return (<div className="res-card-img-cmp">
        <img className="res-card-img" src={image}>
        </img>
    </div>)
}

const RestaurantCard = (props) =>{
    return(
    <div className="res-card">
        <RestoCardImg {...props}/>
        <ul>
            <li> {props.name} </li>
            <li> {props.avgRatingString} </li>
            <li> {props?.cuisines?.join(", ")} </li>
            <li> {props.locality} </li>
        </ul>
    </div>)
}

const ResContainer = () => {
    const props = {
        name:"Meghna Foods",
        rating : "4.4",
        cusinines : "Burger",
        time : "30 min"
    }
    return ( 
    <div className="res-container">
        {restaurants.map(item=> <RestaurantCard key={item.info.id} {...item.info}></RestaurantCard>)}
    </div>)
}
const Body = () =>{
    return (
        <div className="bodyComponent">
            <Search/>
            <ResContainer/>
        </div>
    )
    
}
const AppComponent = () => {
  return(  <div className="app">
        <Header/>
        <Body/>
        {/* <Footer/> */}
    </div>)
}

const root = createRoot(document.getElementById("root"));
root.render(<AppComponent/>)
