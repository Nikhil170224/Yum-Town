import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Offer from "./components/Offer";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";

const Applayout =()=>{
    return(
        <div className="applayout">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [ 
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/offer",
                element: <Offer />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },                         
        ],
        errorElement: <Error />
    },
   
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);