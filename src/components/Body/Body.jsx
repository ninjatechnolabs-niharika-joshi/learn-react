import { useState } from "react";
import  { RestaurantCard } from "./RestaurantContainer";
import restaurants from "../../../utils/restaurants";



const BodyComponent = () => {
  const [rest, setRest] = useState(restaurants)
  const [isClick, setIsClick] = useState(true)
  return (
    <div className="body-component">
      {/* <FilterSearch/>
      <RestroContainerComponent /> */}

      {/* Filter And search embedded together for better UI */}
      <div className="filter-search">
        {/* search Start */}
        <div className="search">
          <input className="search-input" type="text" placeholder="Search" />
        </div>
        {/* Filter Button Start */}
        <div className="filter-btn-cmp">
          <button className="fiter-btn" onClick={() => {
            console.log('Button Clicked!', isClick)
            isClick===true ?   setRest(rest.filter(item=>item.info.avgRating >= 4.7)) : setRest(restaurants)
            setIsClick(!isClick)
            console.log('Changed is Filter')
          }}> Filter Via Rating </button>
        </div>


      </div>
{/*body Start */}

   <div className="res-container">
    {rest.map((item) => {
        return (
          <RestaurantCard
            key={item.info.id}
            {...item.info}
          />
        ) ;
      })} 
      
    </div>

    </div>
  );
};


export default BodyComponent;