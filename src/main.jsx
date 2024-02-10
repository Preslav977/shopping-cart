import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Homepage from "./components/Homepage.jsx";

const rounter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Homepage /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={rounter} />
  </React.StrictMode>,
);
