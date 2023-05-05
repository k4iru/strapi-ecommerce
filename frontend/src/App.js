import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

const Layout = () => {
    return (
        <div className="app">
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products/:id",
                element: <Product />,
            },
            {
                path: "/product/:id",
                element: <Products />,
            },
        ],
    },
]);
// functional react app
const App = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
