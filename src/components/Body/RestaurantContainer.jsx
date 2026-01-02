import constants from "../../../utils/constants";
import restaurants from "../../../utils/restaurants";

// one more way to give csss
const styleCard = {
  backgroundColor: "#000000",
};



const RestaurantCard = (props) => {

  let counter = 0
  const image = `${constants.CDN_URL}${props.cloudinaryImageId}`;
  return (
    <div className="res-card" style={styleCard}>
      <img src={image} alt="food.jpg" className="res-logo"></img>
      <div className="res-card-text" style={{ height: "fit-content" }}>
        <h3>{props?.resName}</h3>
        <h4>{props?.varietyName || props?.cuisines[0]}</h4>
        <h4>{props?.cuisines.join(", ")}</h4>
        <h4>{props?.avgRatingString}</h4>
        <h4> {props?.time || `${counter++}5 mins`}</h4>
      </div>
    </div>
  );
};


export const RestroContainerComponent = () => {
  return (
    <div className="res-container">
      {restaurants.map((item) => {
        return (
          <RestaurantCard
            key={item.info.id}
            {...item.info}
          />
        );
      })}
      
    </div>
  );
};



export default RestroContainerComponent;
