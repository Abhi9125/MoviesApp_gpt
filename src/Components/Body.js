import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./SignIn";
import Browse from "./Browse";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/appSlice";

const Body = () => {
  const dispatch = useDispatch();

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

  // useEffect(() => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in / sign up we store the data in our store
  //       const { uid, email } = user;
  //       dispatch(addUser({ uid: uid, email: email }));
  //       // ...
  //     } else {
  //       // User is signed out remove user data from store
  //       dispatch(removeUser());
  //     }
  //   });
  // }, []);

  return <RouterProvider router={appRouter} />;
};

export default Body;
