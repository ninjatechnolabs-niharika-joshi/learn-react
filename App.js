import { createRoot } from "react-dom/client";
const foodappLogo = new URL("./foodapp.jpg", import.meta.url).href; // for parcel its necessary to give proper direction using url
const food = new URL("./eatfood.jpg", import.meta.url).href; // for parcel its necessary to give proper direction using url
const burger = new URL("./burger.jpg", import.meta.url).href; // for parcel its necessary to give proper direction using url
const restaurants = require("./restaurants");

const LogoComponent = () => {
  console.log("Image path:", foodappLogo); // Add this to debug

  return (
    <div className="logo">
      <img
        className="img-logo"
        src={foodappLogo}
        alt="Logo"
        onError={(e) => {
          console.error("Image failed to load:", e.target.src);
        }}
        onLoad={() => {
          console.log("Image loaded successfully");
        }}
      />
    </div>
  );
};

const NavItemsComponent = () => {
  return (
    <div className="nav-items">
      <ul>
        <li> Home</li>
        <li> About Us</li>
        <li> Company </li>
        <li> Cart </li>
      </ul>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <LogoComponent />
      <NavItemsComponent />
    </div>
  );
};

// one more way to give csss
const styleCard = {
  backgroundColor: "#000000",
};

const SearchComponent = () => {
  return <div className="search">Search</div>;
};
let counter = 1;
let keyCounter = "abc";
const RestaurantCard = (props) => {
  console.log("Called?");
  // const { resData } = props;
  console.log(props);
  const image = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.cloudinaryImageId}`;
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
let keyCounter2 = 10;
/* const swiggyObject = {
  varietyName: "Burger",
  time: "25mins",
  id: "3a95939",
  name: "KFC",

  cloudinaryImageId:
    "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/e165861e-b119-4a31-bfa2-227c89fcfc3c_395939.JPG",
  locality: "Panchwati Cross",
  areaName: "Paldi & Ambawadi",
  costForTwo: "₹400 for two",
  cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  avgRating: 4.2,
  parentId: "547",
  avgRatingString: "4.2",
  totalRatingsString: "7.4K+",
  sla: {
    deliveryTime: 19,
    lastMileTravel: 3.9,
    serviceability: "SERVICEABLE",
    slaString: "15-20 mins",
    lastMileTravelString: "3.9 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2026-01-02 04:00:00",
    opened: true,
  },
  badges: {},
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {},
      textBased: {},
      textExtendedBadges: {},
    },
  },
  aggregatedDiscountInfoV3: {
    header: "50% OFF",
    discountTag: "FLAT DEAL",
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
  externalRatings: {
    aggregatedRating: {
      rating: "--",
    },
  },
  ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
};

const swiggyObject2 = {
  varietyName: "Fries and Meals",
  time: "35mins",
  id: "70279",
  name: "McDonald's",
  cloudinaryImageId:
    "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/962817a0-7d1c-40c9-81a9-19810cae5e56_70279.JPG",
  locality: "Kankaria",
  areaName: "Kankaria",
  costForTwo: "₹400 for two",
  cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  avgRating: 4.4,
  parentId: "630",
  avgRatingString: "4.4",
  totalRatingsString: "24K+",
  sla: {
    deliveryTime: 21,
    lastMileTravel: 2.7,
    serviceability: "SERVICEABLE",
    slaString: "20-25 mins",
    lastMileTravelString: "2.7 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2026-01-01 22:45:00",
    opened: true,
  },
  badges: {
    imageBadges: [
      {
        imageId: "android/static-assets/icons/big_rx.png",
        description: "bolt!",
      },
      {
        imageId: "Rxawards/_CATEGORY-Burger.png",
        description: "Delivery!",
      },
    ],
  },
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {
        badgeObject: [
          {
            attributes: {
              description: "bolt!",
              imageId: "android/static-assets/icons/big_rx.png",
            },
          },
          {
            attributes: {
              description: "Delivery!",
              imageId: "Rxawards/_CATEGORY-Burger.png",
            },
          },
        ],
      },
      textBased: {},
      textExtendedBadges: {},
    },
  },
  aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹119",
  },
  orderabilityCommunication: {
    title: {},
    subTitle: {},
    message: {},
    customIcon: {},
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      mediaType: "ADS_MEDIA_ENUM_IMAGE",
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
  externalRatings: {
    aggregatedRating: {
      rating: "4.3",
      ratingCount: "4.2K+",
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  },
  ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
};*/
const RestroContainerComponent = () => {
  console.log("RestroContainerComponent");
  return (
    <div className="res-container">
      {restaurants.map((item) => {
        console.log("called?");
        return (
          <RestaurantCard
            key={item.info.id}
            {...item.info}
          />
        );
      })}
      {/* <RestaurantCard resData={swiggyObject} />
      <RestaurantCard resData={swiggyObject2} /> */}
      {/* <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard /> */}
    </div>
  );
};
const RestroContainerComponent2 = () => {
  return <div className="res-container2"></div>;
};
const BodyComponent = () => {
  return (
    <div className="body-component">
      <SearchComponent />
      <RestroContainerComponent />
      <RestroContainerComponent2 />
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
