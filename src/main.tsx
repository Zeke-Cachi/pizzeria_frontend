import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import PizzasPage from "./pages/PizzasPage.tsx";
import StoresPage from "./pages/StoresPage.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pizzas",
    element: <PizzasPage />,
  },
  {
    path: "/stores",
    element: <StoresPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
