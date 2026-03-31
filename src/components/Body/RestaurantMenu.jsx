import { useEffect, useState } from "react"
import Shimmer from "./ShimmerUI";
const RestaurantMenu = () => {
    const [details, setDetails] = useState(null)
    useEffect(()=>{
     fetchMenu();
    },[])

    async function fetchMenu(){
    console.log("fetching menu")
        const data = await fetch("http://localhost:3001/api/menu?restaurantId=55558");
        // console.log("data", data)
        const json = await data?.json() || null;

        console.log("json", json)
        setDetails(json.data) // this will trigger re-render and details will be updated with json data, and then we can use it to render the menu

    }
    console.log("details", details)    
    // const {text} = details.cards[0].card

        // const menuDetails = details.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
        // console.log("menuDetails", menuDetails)
  return details===null ? <Shimmer/> :(
  
    <div className="res-menu">
      {/* <h1>{text}</h1> */}
      <h2>Menu</h2>
      {/* <ul>
        {menuDetails.map(item => (
          <li key={item.card.info.id}>
            <h3>{item.card.info.name}</h3>
            <p>Price: ${item.card.info.price / 100}</p>
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default RestaurantMenu
