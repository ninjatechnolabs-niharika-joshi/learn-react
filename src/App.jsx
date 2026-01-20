import { createRoot } from "react-dom/client";
import HeaderComponent from "./components/Headers/Header";
import BodyComponent from "./components/Body/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import AboutUs from "./components/Headers/AboutUs";

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

const appRouter = createBrowserRouter([
  {path: "/", element: <AppLayout />},
  {path: "/about-us", element: <AboutUs />},
]);
const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
