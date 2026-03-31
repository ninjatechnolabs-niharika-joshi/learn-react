import { createRoot } from "react-dom/client";
import HeaderComponent from "./components/Headers/Header";
import BodyComponent from "./components/Body/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/Headers/AboutUs";
import ContactUs from "./components/Headers/ContactUs";
import Error from "./components/Headers/Error";
import RestaurantMenu from "./components/Body/RestaurantMenu";

// const food = new URL("../eatfood.jpg", import.meta.url).href; // for parcel its necessary to give proper direction using url
// const burger = new URL("../burger.jpg", import.meta.url).href; // for parcel its necessary to give proper direction using url

const AppLayout = () => {


  return (
    <div className="app">
      <HeaderComponent />
      <Outlet /> {/** any component of children will replace this Outlet */}
    </div>
  );
};
const appRouter = createBrowserRouter([
{
    path: "/",
    element: <AppLayout />,
    errorElement: <Error/>,

     children: [
      { index: true, element: <BodyComponent /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "contact-us", element: <ContactUs /> },
      {path:"restaurants/:id", element:<RestaurantMenu/>},
      { path: "*", element: <Error /> }, // 404
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
