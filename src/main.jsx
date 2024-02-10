import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HomePageWrapper from "./components/HomepageWrapper.jsx";

const rounter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <HomePageWrapper /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={rounter} />
  </React.StrictMode>,
);
