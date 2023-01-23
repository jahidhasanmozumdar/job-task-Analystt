import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home";
import UserDetails from "./component/UserDetails/UserDetails";
import { useState } from "react";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      loader: async () => {
        return fetch("https://jsonplaceholder.typicode.com/users");
      },
      element: <Home></Home>,
    },
    {
      path:"/data/:dataId",
      loader: async ({ params }) => {
        return fetch(
          `https://jsonplaceholder.typicode.com/users/${params.dataId}`
        );
      },
      element:<UserDetails></UserDetails>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
