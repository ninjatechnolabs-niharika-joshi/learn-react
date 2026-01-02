import RestroContainerComponent from "./RestaurantContainer";
import SearchComponent from "./Search";

const BodyComponent = () => {
  return (
    <div className="body-component">
      <SearchComponent />
      <RestroContainerComponent />
    </div>
  );
};


export default BodyComponent;