import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Categories";
import Product from "./pages/Product";
import About from "./pages/About";
import { DataProvider } from "./GlobalState";
import Subcategory from "./pages/Category";
import Category from "./pages/Category";

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
    path: "/categories",
    element: <Products />,
  },
  {
    path: "/categories/:id",
    element: <Category />,
  },
  {
    path: "/product/:id",
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
