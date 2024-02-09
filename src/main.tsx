import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import PizzasPage from "./pages/PizzasPage.tsx";
import StoresPage from "./pages/StoresPage.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
