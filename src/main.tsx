import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import PizzaDetails from "./pages/PizzaDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pizza/:id/:pizzaName/:pizzaDescription/:pizzaBakeType/:pizzaPrice/:pizzaImg1/:pizzaImg2/:pizzaImg3",
    element: <PizzaDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
