import { createRoot } from "react-dom/client";
import HeaderComponent from "./components/Headers/Header";
import BodyComponent from "./components/Body/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import AboutUs from "./components/Headers/AboutUs";
import ContactUs from "./components/Headers/ContactUs";
import Error from "./components/Headers/Error";

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
{
    path: "/",
    element: <AppLayout />,

     children: [-+
      // { index: true, element: <AppLayout /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "*", element: <Error /> }, // 404
    ],
  },
]);
  // {path: "/", element: <AppLayout /> },
  // {path: "/about-us", element: <AboutUs />},
  // {path: "/contact-us", element: <ContactUs />},
  // {path: "*", element: <Error/>}
// ]);
const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
