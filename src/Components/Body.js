import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./SignIn";
import Browse from "./Browse";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/browser",
      element: <Browse />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
