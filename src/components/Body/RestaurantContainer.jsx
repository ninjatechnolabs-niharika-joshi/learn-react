import constants from "../../../utils/constants";
import restaurants from "../../../utils/restaurants";

// one more way to give csss
const styleCard = {
  backgroundColor: "#000000",
};



export const RestaurantCard = (props) => {

  let counter = 0
  const image = `${constants.CDN_URL}${props.cloudinaryImageId}`;
  return (
    <div className="res-card" style={styleCard}>
      <img src={image} alt="food.jpg" className="res-logo"></img>
      <div className="res-card-text" style={{ height: "fit-content" }}>
        <h3>{props?.name}</h3>
        <h4>{props?.varietyName || props?.cuisines[0]}</h4>
        <h4>{props?.cuisines.join(", ")}</h4>
        <h4>{props?.avgRating}</h4>
        <h4> {props?.time || `${counter++}5 mins`}</h4>
      </div>
    </div>
  );
};


export const RestroContainerComponent = () => {
  
  const finalRestaurants = !isFilter? restaurants : restaurants.filter(item=>item.info.avgRating >=4.7);
  return (
    <div className="res-container">
    {finalRestaurants.map((item) => {
        return (
          <RestaurantCard
            key={item.info.id}
            {...item.info}
          />
        ) ;
      })} 
      
    </div>
  );
};



export default RestroContainerComponent;
