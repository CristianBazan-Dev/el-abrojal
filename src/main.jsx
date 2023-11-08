import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import About from "./pages/About";
import { DataProvider } from "./GlobalState";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/#/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <Product />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>
);
