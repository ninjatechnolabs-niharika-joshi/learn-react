import { createRoot } from "react-dom/client";
import HeaderComponent from "./components/Headers/Header";
import BodyComponent from "./components/Body/Body";
import { useEffect } from "react";
// const food = new URL("../eatfood.jpg", import.meta.url).href; // for parcel its necessary to give proper direction using url
// const burger = new URL("../burger.jpg", import.meta.url).href; // for parcel its necessary to give proper direction using url

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
